import React from 'react';

const ReviewsDetails = ({ review }) => {
    const { email, img, name, yourReview } = review;
    return (
        <div className="card my-5 gap-5 items-center card-side bg-base-500 shadow-xl px-2 py-2">
            <div className='flex items-center'>
                <img src={img} alt="" className='w-24 h-24 rounded-lg' />
            </div>
            <div className='flex justify-between w-full'>
                <div className="">
                    <h2 className="text-left font-semibold">{name}</h2>
                    <p className='text-xl italic text-left'><small>{yourReview}</small></p>
                </div>
                <div>
                    <button className='btn mr-5'>Update</button>
                    <button className='btn'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetails;