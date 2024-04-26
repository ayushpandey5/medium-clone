import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter} from "./ui/card"

export const Blog = () => {
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
                src="/placeholder.svg"
                width={400}
              />
            </Link>
            <CardContent>
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-gray-800">
                  Design
                </div>
                <h3 className="text-xl font-bold">
                  <Link to="#">Designing for the Future: Trends and Insights</Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the latest design trends and learn how to create future-proof experiences.
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
