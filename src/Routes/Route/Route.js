import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/Home/SignUp/SignUp/SignUp";
import Iphone from "../../Pages/Iphone/Iphone/Iphone";
import Login from "../../Pages/Login/Login/Login";
import Samsung from "../../Pages/Samsung/Samsung/Samsung"
import Xiaomi from "../../Pages/Xiaomi/Xiaomi/Xiaomi";
import PrivateRoute from "../PrivateRoute/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/iphone',
                element: <PrivateRoute><Iphone></Iphone></PrivateRoute>
            },
            {
                path: '/samsung',
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>
            },
            {
                path: '/xiaomi',
                element: <PrivateRoute><Xiaomi></Xiaomi></PrivateRoute>
            },
        ]
    }
])

export default router;