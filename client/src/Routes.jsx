import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Components/Home";
import DashboardPage from "./Pages/DashboardPage";
import ShopSection from "./Components/ShopSection";
import CardDetails from "./Components/CardDetails";
import StatisticsPage from "./Pages/StatisticsPage";
import CartPage from "./Components/CartPage";
import WishlistPage from "./Components/WishlistPage";
import AboutPage from "./Pages/AboutPage";
import Dashboard from "./Admin/DashboardPage";
import AddProducts from "./Admin/AddProducts";
import AllProducts from "./Admin/AllProducts";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import PrivateRoute from "./Components/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('https://gadget-heaven-server-henna.vercel.app/products/categories'),
                children: [
                    {
                        path: '/',
                        element: <ShopSection/>,
                        loader: () => fetch("https://gadget-heaven-server-henna.vercel.app/products")

                    },
                    {
                        path: '/shop/:id',
                        element: <ShopSection/>,
                        loader: () => fetch("https://gadget-heaven-server-henna.vercel.app/products")
                    }
                ]
            },
            {
                path: '/statistics',
                element: <StatisticsPage/>,
                loader: () => fetch("https://gadget-heaven-server-henna.vercel.app/products")
            },
            {
                path: '/dashboard',
                element: <DashboardPage/>
            },
            {
                path:"/item/:id",
                element:<CardDetails/>,
                loader: () => fetch("https://gadget-heaven-server-henna.vercel.app/products")
            },
            {
                path: '/cart',
                element: <CartPage/>
            },
            {
                path: '/wishlist',
                element: <WishlistPage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/admin/dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>,
                children: [
                    {
                        path: 'add-product',
                        element: <AddProducts/>
                    },
                    {
                        path: 'all-products',
                        element: <AllProducts/>
                    },
                    {
                        path: 'order'
                    }
                ]
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    }
])

export default router