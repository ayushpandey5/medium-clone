import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
    const token = localStorage.getItem("token")
    return token ? <Outlet /> : <Navigate to="/signin" />
}

export const AuthRoute = () => {
    const token = localStorage.getItem("token")
    return token ? <Navigate to="/blogs" /> : <Outlet /> 
}