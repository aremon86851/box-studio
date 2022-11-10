import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import AllReviews from '../../shared/AllReviews/AllReviews';
import AddReview from '../Services/AddReview/AddReview';

const ServicesDetails = () => {
    const { description, img, price, title, _id } = useLoaderData()
    const [revInfo, setRevInfo] = useState([])
    useTitle('Service Details')
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setRevInfo(data))
    }, [_id])
    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className="card my-10 col-span-2">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img alt='' className='w-full' src={img} /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Name : <span className='italic font-bold text-red-700'>{title}</span></h2>
                    <p className='my-5 text-justify'>{description}</p>
                    <div className="card-actions justify-end">
                        <p className='text-left text-3xl font-semibold'><span>$</span><span>{price}</span></p>
                    </div>
                </div>
                <div>
                    <AddReview id={_id} revInfo={revInfo} setRevInfo={setRevInfo}></AddReview>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-3xl font-semibold mb-2'>Review</h2>
                {
                    revInfo.map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                }
            </div>
        </div>
    );
};

export default ServicesDetails;