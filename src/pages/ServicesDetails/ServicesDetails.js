import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { description, img, price, title, _id } = useLoaderData()
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
                    <p className='text-left my-5'>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Review page</h2>
            </div>
        </div>
    );
};

export default ServicesDetails;