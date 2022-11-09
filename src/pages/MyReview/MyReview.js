import React, { useContext, useEffect, useState } from 'react';
import { ReactContext } from '../../AuthProvider/AuthProvider';
import ReviewsDetails from './ReviewsDetails/ReviewsDetails';

const MyReview = () => {
    const { user } = useContext(ReactContext)
    const [userReviews, setUserReviews] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?name=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [user?.email])
    console.log(userReviews)
    return (
        <div className='my-10 '>
            <h2 className='text-4xl font-semibold italic my-2'>Total Review : <span className='text-red-500'>{userReviews?.length}</span></h2>

            {
                userReviews?.length > 0 ? <>
                    <div className='md:mx-10 mx-0 '>
                        {
                            userReviews?.map(review => <ReviewsDetails key={review._id} review={review}></ReviewsDetails>)
                        }
                    </div>
                </> : <div className='flex items-center justify-center min-h-screen'><h2 className='my-auto text-5xl italic font-semibold underline'>"No review were added"</h2></div>
            }
        </div>
    );
};

export default MyReview;