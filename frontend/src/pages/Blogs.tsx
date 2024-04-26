import {useState } from "react"
import { Header } from "@/components/Header"
import { Blog } from "@/components/Blog"

export const Blogs = () => {
    const [laoding, setLoading] = useState(true)
    return (
        <div>
            <Header />
            <Blog />
        </div>
    )
}