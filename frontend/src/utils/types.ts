import { z } from "zod"
 
export const SignUpSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(5).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{5,}$/, 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol')
})

export const SignInSchema = SignUpSchema.omit({username: true})

export const AddBlogSchema = z.object({
  title: z.string().min(1, {message: "Please provide a title"}),
  content: z.string(),
  published: z.boolean(),
})