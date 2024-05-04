import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Loader2 } from "lucide-react";
import blogImage from '../assets/bg.png'
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

async function loadFromDatabase({id}) {
    const blogId = id;
    const token = localStorage.getItem("token")
    try {
        const res = await axios.get(`https://medium-backend.ayushpandey-dev.workers.dev/api/v1/blog/${blogId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(res.data){
            return res.data.data
            // return res.data.data.title,storageString
            //   ? (JSON.parse(storageString.content) as PartialBlock[])
            //   : undefined;
        }
    } catch (error) {
        console.log(error)
        return undefined
    }
  }

export const SingleBlog = () => {
    const {id} = useParams()
    const [blogData, setBlogData] = useState(null)
    const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");
 
  // Loads the previously stored editor contents.
  useEffect(() => {
    loadFromDatabase({id}).then((content) => {
        toast("Blog fetched")
      setInitialContent(JSON.parse(content.content));
      setBlogData(content)
    }).catch((e)=> {
        toast("Error")
    });
  }, []);
    const editor = useMemo(() => {
        if (initialContent === "loading") {
        return undefined;
        }
        return BlockNoteEditor.create({ initialContent });
    }, [initialContent]);
    
    return (
        <div>
            <Header />
            <div>
                <img src={blogImage} alt="blog_image" className="w-[100%] h-[250px] object-cover"/>
            </div>
            <div className="flex flex-col align-middle justify-center m-10">
                <h1 className="text-3xl bg-indigo-200 mb-5 rounded-lg justify-center text-center align-middle">{blogData ? (blogData as any).title : null}</h1>
                {editor ? <BlockNoteView editor={editor}/> : <div className="flex justify-center align-middle"><Loader2 className="mr-2 h-5 w-5 animate-spin"/></div>}
            </div>
            <Toaster />
        </div>
    );

}