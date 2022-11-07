import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import MyReview from '../pages/MyReview/MyReview'
import AddService from '../pages/AddService/AddService'
import Services from '../pages/Services/Services'

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
                path: '/myReview',
                element: <MyReview></MyReview>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router