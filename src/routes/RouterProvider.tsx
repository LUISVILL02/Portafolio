import {
    createBrowserRouter,
    RouterProvider as ReactRouterProvider
} from "react-router";
import { routes } from "./routes";
import { Layaut } from "../pages/Layaut";
import { Landing } from "../pages/home/Landing";

const router = createBrowserRouter([{
    path: routes.HOME,
    element: <Layaut/>,
    errorElement: <h1>404</h1>,
    children: [
        {
            path: routes.HOME,
            element: <Landing/>
        },
        {
            
        }
    ]
}])

const RouterProvider = () => <ReactRouterProvider router={router} />

export default RouterProvider;