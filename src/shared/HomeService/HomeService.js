import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HomeService = ({ service }) => {
    const { description, price, title, _id, img } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" className='w-full h-60 cursor-pointer' /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-left italic'>
                    {
                        description.length > 100 ? <>
                            {description.slice(0, 100)}, <Link to="">.....</Link>
                        </> : description
                    }
                </p>
                <div className="card-actions justify-between items-center mt-5">
                    <p className='text-left text-3xl font-semibold'><span>$</span><span>{price}</span></p>
                    <Link to={`/services/${_id}`}><button className="btn btn-primary italic">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeService;