import React from 'react';

const AllReviews = ({ review }) => {
    const { email, img, name, yourReview } = review;
    return (
        <div className="card gap-2 card-side bg-base-100 shadow-xl my-5">
            <div className='flex items-center'>
                <img src={img} alt="" className='w-24 h-24 rounded-lg' />
            </div>
            <div className="">
                <h2 className="text-left font-semibold">{name}</h2>
                <p className='text-xl italic text-left'><small>{yourReview}</small></p>
            </div>
        </div>
    );
};

export default AllReviews;