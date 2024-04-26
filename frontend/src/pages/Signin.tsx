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
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { useRecoilState } from "recoil"
import { userTokenAtom } from "@/store/store"
import { useState } from "react"
import { Loader2 } from "lucide-react"


export const Signin = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [userTokenState, setUserTokenState] = useRecoilState(userTokenAtom)
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
    async function onSubmit(values: z.infer<typeof SignInSchema>) {
      setLoading(true)
      try {
        const res = await axios.post("https://medium-backend.ayushpandey-dev.workers.dev/api/v1/user/signin", {
          email: values.email,
          password: values.password
        })
        if(res.data){
          if(res.data.error == "Password is wrong"){
            toast("Password in wrong, Try again")
          }
          if(res.data.error == "No user found"){
            toast("No user data. Check your email")
          }
          if(res.data.success){
            localStorage.setItem("token", res.data.success.split(" ")[0])
            console.log(res.data.success.split(" ")[0])
            navigate('/blogs')
          }
        } else {
          console.log("Data Fetching error")
          toast("Error Fetching Data")
        }
        setLoading(false)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
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
         <Button className="w-full" type="submit">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
          Submit</Button>
        </form>
      </Form>   
        <div className="text-center text-gray-500 dark:text-gray-400">
            Don't have an account? 
            <Link className="font-medium hover:text-gray-700 dark:hover:text-gray-300" to='/signup'>
              Sign Up
            </Link>
            <Toaster />
        </div>
      </div>
      </div>
  )
}