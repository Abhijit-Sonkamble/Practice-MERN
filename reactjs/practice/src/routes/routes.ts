import { createBrowserRouter } from "react-router"
import App from "../App"
import LoginPage from "../Pages/LoginPage"
import Pagination from "../Pages/Pagination"

const allRoutes = {
    login: "/login",
    pagination : "/pagination"
}

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                 path: allRoutes.login,
                Component: LoginPage
            },
            {
                path: allRoutes.pagination,
                Component: Pagination
            }
        ]
    }
])