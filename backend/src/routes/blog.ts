import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt"
import { PostType } from "../utils/types";

const blog = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_KEY: string
    },
    Variables: {
        userID: string,
        id: string,
        prisma: any
    }
}>()

blog.use('/*', async(c,next) => {
    try {
    const token = c.req.header('Authorization') || "";
    const user = await verify(token, c.env.JWT_KEY);
    if(!user){
        return c.json({ error: "Unauthorized" }, 401);
    }
    c.set('userID', user.id);
    await next();
    } catch (error) {
        return c.json({ error: "No Token" }, 401);
    }
})

blog.post('/', async(c) => {
    const prisma = c.get('prisma')
    const body = await c.req.json()
    const {success} = PostType.safeParse(body)
    if(!success){
        return Response.json({error: "Bad Request"})
    }
    const userID = c.get('userID')
    try {
        const res = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                authorId: userID
            }
        })
        return Response.json({post: `${res.title} Blog created`})
    } catch (error) {
        console.log(error)
        return Response.json({error: error})
    }
})

blog.get("/bulk", async(c) => {
    const prisma = c.get('prisma')
    const userID = c.get('userID')
    if(!userID){
        return Response.json({error: "Not Authorized"})
    }
    const res = await prisma.post.findMany({})
    return Response.json({success: true, data: res})
})

blog.get("/myblogs", async (c) => {
    try {
        const prisma = c.get('prisma')
        const userID = c.get('userID');
        if (!userID) {
            return c.json({ error: "User ID not found" }, 401);
        }
        const res = await prisma.post.findMany({
            where: {
                authorId: userID
            }
        });
        return c.json({ data: res });
    } catch (error) {
        console.error("Error:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
});

blog.get("/:id", async(c) => {
    const prisma = c.get('prisma')
    const id = c.req.param('id')
    const res = await prisma.post.findFirst({
       where: {
        id: id
       }
    })
    return Response.json({data: res})
})


export {blog}