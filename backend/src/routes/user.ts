import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { UserType, SigninType } from "../utils/types";
import { sign } from 'hono/jwt'

const user = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_KEY: string
    }, Variables: {
        prisma: any
    }
  }>();

user.post('/signup', async (c) => {
    const prisma = c.get('prisma')
    const body = await c.req.json();
    const parsedBody = UserType.safeParse(body)
    
    if(!parsedBody.success){
        return Response.json({error: "Bad Request"})
    }
    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                   { email: parsedBody.data.email },
                   { username: parsedBody.data.username }
                ]
            }
        })
        if(existingUser){
            return Response.json({success: "failed", reason: "User already exists."});
        }
        const res = await prisma.user.create({
            data: {
                email: parsedBody.data.email,
                password: parsedBody.data.password,
                username: parsedBody.data.username
            }
        })
        return Response.json({success: `${res.email} added`})
    } catch (error) {
        console.error(error)
        return Response.json({error: error})
    } finally {
        await prisma.$disconnect
    }
})


user.post('/signin', async(c) => {
    const prisma = c.get('prisma')
    const body = await c.req.json();
    const parsedBody = SigninType.safeParse(body)
    if(!parsedBody.success){
        return Response.json({error: "Bad Data format"})
    }
    const user = await prisma.user.findUnique({
		where: {
			email: parsedBody.data.email
		}
	});
    if(!user){
        return Response.json({error: "No user found"})
    }
    if(parsedBody.data.password != user.password){
        return Response.json({error: "Password is wrong"})
    }
    const payload = { id: user.id }
    const secret = c.env.JWT_KEY
    const token = await sign(payload, secret)
    await prisma.user.update({
        data: {
            token: {
                push: token
            }
        },
        where: {
            email: parsedBody.data.email
        }
    })
    return Response.json({success: `${token} generated`})
})

export {user} 