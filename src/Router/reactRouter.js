import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import MyReview from '../pages/MyReview/MyReview'
import AddService from '../pages/AddService/AddService'
import Services from '../pages/Services/Services'
import Blog from '../pages/Blog/Blog'

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
                element: <MyReview></MyReview>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router