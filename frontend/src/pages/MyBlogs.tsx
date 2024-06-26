import { Blog } from "@/components/Blog"
import { Header } from "@/components/Header"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

async function loadMyBlogs(){
    const token = localStorage.getItem("token")
    const res = await axios.get("https://medium-backend.ayushpandey-dev.workers.dev/api/v1/blog/myblogs", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(res.data){
        return res.data
    }
}

export const MyBlogs =() => {
    const [blogs,setBlogs] = useState(null)
    useEffect(() => {
        loadMyBlogs().then((data)=>{
            setBlogs(data.data)
        })
    }, [])

    return (
        <div>
        <Header />
        {blogs ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-12 md:py-10">
            {blogs.map((blog: any) => <Blog data={blog} key={blog.id} />)}
            </div>) :(<div className="flex justify-center align-middle">
                        <Loader2 className="mr-2 h-10 w-10 animate-spin"/>
                    </div> )}
        </div>
        )
}