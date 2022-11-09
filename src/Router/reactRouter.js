import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import MyReview from '../pages/MyReview/MyReview'
import AddService from '../pages/AddService/AddService'
import Services from '../pages/Services/Services'
import Blog from '../pages/Blog/Blog'
import ServicesDetails from '../pages/ServicesDetails/ServicesDetails'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Update from '../pages/Update/Update'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/homeService')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
            }
        ]
    }
])

export default router