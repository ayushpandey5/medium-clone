import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SignUpSchema } from "@/utils/types"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export const Signup = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    setLoading(true)
    const res = await axios.post("https://medium-backend.ayushpandey-dev.workers.dev/api/v1/user/signup", {
      username: values.username,
      email: values.email,
      password: values.password
    })

    if(res.data.success == "failed"){
      return toast("User Already Exists, Try to Log in")
    } else {
      navigate('/signin')
    }
    setLoading(false)
    console.log(res)
    console.log(values)
  }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
          <div className="mx-auto max-w-[480px] w-full space-y-8 bg-white rounded-xl shadow-lg p-8 dark:bg-gray-900">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight">Sign Up</h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Enter your information to create an account.
              </p>
            </div>
                    <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Usernmae</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                <Button className="w-full" type="submit">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" />: null}
                  Submit
                </Button>
                </form>
              </Form> 
            <div className="text-center text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link className="font-medium hover:text-gray-700 dark:hover:text-gray-300" to='/signin'>
                Sign In
              </Link>
            </div>
          </div>
          <Toaster />
        </div>
      )
}