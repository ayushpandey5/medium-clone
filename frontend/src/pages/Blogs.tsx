import {useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { Blog, SkeletonBlog } from "@/components/Blog"
import axios from "axios"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export const Blogs = () => {
    const [laoding, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        setLoading(true)
        const userToken = localStorage.getItem("token");
        (async () => {
            try {
                const res = await axios.get("https://medium-backend.ayushpandey-dev.workers.dev/api/v1/blog/bulk", {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });
                if(res.data){
                    console.log(res.data.data);
                    setBlogs(res.data.data)
                    setLoading(false)
                }
            } catch (error) {
                toast("Fetching blogs error")
                setError(true)
                console.log("Error retrieving blogs", error);
            }
        })();
    }, []);
    return (
        <div>
            <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-12 md:py-10">
            {laoding ? <div>Loading...</div> : blogs ? blogs.map((blog) => <Blog data={blog} key={blog.id} />) : null}
        </section>
            <Toaster />
        </div>
    )
}