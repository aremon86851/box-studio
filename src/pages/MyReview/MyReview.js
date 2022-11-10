import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ReactContext } from '../../AuthProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';
import ReviewsDetails from './ReviewsDetails/ReviewsDetails';

const MyReview = () => {
    const { user } = useContext(ReactContext)
    const [userReviews, setUserReviews] = useState()
    useTitle('My Review')
    // Review load via query in fetch
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?name=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [user?.email])
    // Handler
    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    const remainingReview = userReviews.filter(rev => rev._id !== id)
                    setUserReviews(remainingReview)
                    toast('Review deleted successfully!', {
                        icon: '👏',
                    });
                }
            })

    }
    return (
        <div className='my-10 '>
            <h2 className='text-4xl font-semibold italic my-2'>Total Review : <span className='text-red-500'>{userReviews?.length}</span></h2>

            {
                userReviews?.length > 0 ? <>
                    <div className='md:mx-10 mx-0 '>
                        {
                            userReviews?.map(review => <ReviewsDetails key={review._id} handleDelete={handleDelete} review={review}></ReviewsDetails>)
                        }
                        <Toaster />
                    </div>
                </> : <div className='flex items-center justify-center min-h-screen'><h2 className='my-auto text-5xl italic font-semibold underline'>"No review were added"</h2></div>
            }
        </div>
    );
};

export default MyReview;