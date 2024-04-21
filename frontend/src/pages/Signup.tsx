import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export const Signup = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
          <div className="mx-auto max-w-[480px] w-full space-y-8 bg-white rounded-xl shadow-lg p-8 dark:bg-gray-900">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight">Sign Up</h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Enter your information to create an account.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="font-medium" htmlFor="username">
                  Username
                </Label>
                <Input
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
                  id="username"
                  placeholder="JohnDoe"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <Label className="font-medium" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-3">
                <Label className="font-medium" htmlFor="password">
                  Password
                </Label>
                <Input
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
                  id="password"
                  required
                  type="password"
                />
              </div>
              <Button className="w-full bg-primary text-white hover:bg-primary-600 focus:ring-primary" type="submit">
                Sign Up
              </Button>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link className="font-medium hover:text-gray-700 dark:hover:text-gray-300" to={'#'}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )
}