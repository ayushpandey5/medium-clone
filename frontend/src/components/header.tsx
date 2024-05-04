import { Link } from "react-router-dom"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm dark:bg-gray-950">
      <Link className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50" to="/blogs">
        <PencilIcon className="h-6 w-6" />
        <span>Blog</span>
      </Link>
      <nav className="flex items-center space-x-6">
        <Avatar>
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          to="/addblog">
          Add Blog
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          to="/myblogs">
          MyBlogs
        </Link>
         <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          to="/signup" onClick={() => {
            localStorage.removeItem("token")
          }}>
          Logout
        </Link>
      </nav>
    </header>
    )
}

function PencilIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }