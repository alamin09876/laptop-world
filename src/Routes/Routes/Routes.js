import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Sellers from "../../Pages/Dashboard/AllUsers/Sellers";
import SellerDashboard from "../../Pages/Dashboard/Dashboard/SellerDashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Update from "../../Pages/Dashboard/Update/Update";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/Home/ProductDetails/ProductDetails";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path:'/login',
                element : <Login></Login>
            },
            {
                path:'/signup',
                element : <SignUp></SignUp>
            },
            {
                path:'/blog',
                element : <Blog></Blog>
            },
            {
                path:'/sellers',
                element : <Sellers></Sellers>
            },
            {
                path:'/sellerDashboard',
                element : <PrivateRoute><SellerDashboard></SellerDashboard></PrivateRoute>,
                
            },
            {
                path:'/addproducts',
                element : <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
                
            },
            
            {
                path:'/myproducts',
                element :<MyProducts></MyProducts>,
                loader: () => fetch('http://localhost:5000/products')
                
            },
            
            {
                path:'/myorders',
                element : <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/bookings')
                
            },
            {
                path:'/product/:id',
                element : <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
                
            },
            {
                path:'/advertice/:id',
                element : <MyProducts></MyProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
                
            },
            {
                path : '/update/:id',
                element :<PrivateRoute><Update></Update></PrivateRoute>,
                loader : ({params}) => fetch (`http://localhost:5000/products/${params.id}`)
            },
            {
                path : '/categories/:id',
                element : <Categories></Categories>,
                loader : ({params}) => fetch (`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/allusers',
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            }



        ]
    }
])
export default router