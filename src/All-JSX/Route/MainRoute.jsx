import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "../Layout/MainLayout.jsx";
import Home from '../Pages/Home.jsx';
import Error from '../Pages/Error.jsx';
import LogIn from '../Pages/LogIn.jsx';
import Register from '../Pages/Register.jsx';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Cart from '../Pages/Cart/Cart.jsx';
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("/service.json"),
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                loader: () => fetch("/service.json"),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: "/cart",
                loader: () => fetch("/service.json"),
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])