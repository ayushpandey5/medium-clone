import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter} from "./ui/card"
import blogImage from "../assets/bg.png"

export const Blog = ({data}) => {
    return (
        <div>
    <main className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Link to="#">
              <img
                alt="Blog post image"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height={225}
                src={blogImage}
                width={400}
              />
            </Link>
            <CardContent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  <Link to="#">{data.title}</Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {data.contents}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>April 26, 2024</span>
                </div>
                <Link className="text-sm ml-2 bold italic font-medium text-gray-900 hover:underline dark:text-gray-50" to="#">
                  Read more
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      </div>
      )
}

export const SkeletonBlog = () => {
    return (
        <div>
    <main className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Link to="#">
              <img
                alt="Blog post image"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height={225}
                src={blogImage}
                width={400}
              />
            </Link>
            <CardContent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  <Link to="#">{data.title}</Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {data.contents}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>April 26, 2024</span>
                </div>
                <Link className="text-sm ml-2 bold italic font-medium text-gray-900 hover:underline dark:text-gray-50" to="#">
                  Read more
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      </div>
      )
}
