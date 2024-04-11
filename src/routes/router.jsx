import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Avatar from "../Pages/Avatar";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
       
    },
    {
        path:"/register",
        element:<Register/>,
       
    },
    {
        path:"/profile",
        element:<Profile/>,
       
    },
    {
        path:"/avatar",
        element:<Avatar/>,
       
    },
]);