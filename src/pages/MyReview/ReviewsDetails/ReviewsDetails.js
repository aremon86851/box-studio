import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../../hooks/useTitle';

const ReviewsDetails = ({ review, handleDelete }) => {
    const [serviceName, setServiceName] = useState({})
    const { email, img, name, yourReview, serviceId, _id } = review;
    // Get reviews using id 
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceName(data))
    }, [serviceId])
    return (
        <div className="card my-5 gap-5 items-center card-side bg-base-500 shadow-xl px-2 py-2">
            <div className='flex items-center'>
                <img src={img} alt="" className='w-24 h-24 rounded-lg' />
            </div>
            <div className='w-full grid grid-cols-3'>
                <div className="col-span-2">
                    <h1 className='mb-2 text-left'><span className='font-semibold'>Service Name :</span> <Link to={`/services/${serviceName?._id}`} className="underline italic font-semibold text-blue-500 text-xl ">{serviceName.title}</Link></h1>
                    <h2 className="text-left font-semibold"><span className='font-semibold'>Name : </span>{name}</h2>
                    <p className='text-left'><span className='font-semibold'>Review : </span> <span className='italic'>{yourReview}</span> </p>
                </div>
                <div className='col-span-1 flex items-center justify-end'>
                    <div>
                        <Link to={`/update/${_id}`}><button className='btn mr-5'>Edit review</button></Link>
                        <button onClick={() => handleDelete(_id)} className='btn'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetails;