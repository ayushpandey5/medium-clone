import { z } from "zod";


export const UserType = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(5).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{5,}$/, 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol')
})

export const PostType = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean().default(true),
})

export const EditPost = PostType.partial()

export const SigninType = z.object({
    email: z.string().email(),
    password: z.string().min(5).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{5,}$/, 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol')
})

