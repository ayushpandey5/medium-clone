import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SignInSchema } from "@/utils/types"
import { Link } from "react-router-dom"


export const Signin = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })
    function onSubmit(values: z.infer<typeof SignInSchema>) {
      console.log(values)
    }

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="mx-auto max-w-[480px] w-full space-y-8 bg-white rounded-xl shadow-lg p-8 dark:bg-gray-900">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Enter your information to log in.
          </p>
        </div>
        
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="me@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
         <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>   
        <div className="text-center text-gray-500 dark:text-gray-400">
            Don't have an account? 
            <Link className="font-medium hover:text-gray-700 dark:hover:text-gray-300" to='/signup'>
              Sign Up
            </Link>
        </div>
      </div>
      </div>
  )
}