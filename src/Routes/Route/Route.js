import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/Home/SignUp/SignUp/SignUp";
import Iphone from "../../Pages/Iphone/Iphone/Iphone";
import Login from "../../Pages/Login/Login/Login";
import Samsung from "../../Pages/Samsung/Samsung/Samsung"
import Xiaomi from "../../Pages/Xiaomi/Xiaomi/Xiaomi";
import PrivateRoute from "../PrivateRoute/PrivateRoute/PrivateRoute";
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers/AllUsers'
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import SeeProduct from "../../Pages/AddProduct/SeeProduct/SeeProduct";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders/MyOrders";
import AllSeller from "../../Pages/Dashboard/AllUsers/AllSeller/AllSeller";
import AllBuyers from "../../Pages/Dashboard/AllUsers/AllBuyers/AllBuyers";
import Error from "../Error/Error";
import Payment from "../../Pages/Dashboard/Payment/Payment";

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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/seeproduct',
                element: <SeeProduct></SeeProduct>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://assignment-12-server-site.vercel.app/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;