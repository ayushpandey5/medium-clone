import { Header } from "@/components/Header"
import {useCreateBlockNote, BlockNoteView} from '@blocknote/react'
import "@blocknote/react/style.css";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AddBlogSchema } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";
import { error } from "console";

export const AddBlog = () => {
    const [loading, setLoading] = useState(false)
    const editor = useCreateBlockNote();
    const form = useForm<z.infer<typeof AddBlogSchema>>({
        resolver: zodResolver(AddBlogSchema),
        defaultValues: {
          title: "",
          content: "",
          published: false,
        },
    });

    async function onSubmit(values: z.infer<typeof AddBlogSchema>){
        setLoading(true)
        const content = JSON.stringify(editor.document)
        const token = localStorage.getItem("token")

        
        const res = await axios.post("https://medium-backend.ayushpandey-dev.workers.dev/api/v1/blog", {
            title: values.title,
            content: content,
            published: true
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setLoading(false)
        if(res.data){
            toast("Blog created")
            console.log(res.data)
        }
        else{
            toast("Error creating a blog")
        }
    }

      return (
        <div>
            <Header/>
            <div className="flex justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[500px]">
                <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <BlockNoteView editor={editor}/>
         <Button className="w-full" type="submit">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
          Add</Button>
        </form>
      </Form>   
      </div>
        <Toaster />
        </div>
    )
}