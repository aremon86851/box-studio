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
        <div className='my-10 md:mx-10 mx-0 '>
            {
                userReviews?.map(review => <ReviewsDetails key={review._id} review={review}></ReviewsDetails>)
            }
        </div>
    );
};

export default MyReview;