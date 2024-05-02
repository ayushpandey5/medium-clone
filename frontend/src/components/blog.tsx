import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter} from "./ui/card"
import blogImage from "../assets/bg.png"

export const Blog = ({ data, key }) => {
    const toPath = `${data.id}`
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
        <img
          alt="Blog Post Image"
          className="w-full h-48 object-cover"
          height="200"
          src={blogImage}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{data.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{data.content}</p>
          <Link
            className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300" to={toPath}>
            Read More
          </Link>
        </div>
      </div>
    );
  };

  export const SingleBlog = ({ blog }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
        <img
          alt="Blog Post Image"
          className="w-full h-48 object-cover"
          height="200"
          src={blogImage}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{data.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{data.content}</p>
          <Link
            className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300" to={toPath}>
            Read More
          </Link>
        </div>
      </div>
    );
  };