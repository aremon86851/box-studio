import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = ({ service }) => {
    const { description, price, title, _id, img } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-full h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-left italic'>
                    {
                        description.length > 100 ? <>
                            {description.slice(0, 100)}, <Link to="">.....</Link>
                        </> : description
                    }
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary italic">Read more...</button>
                </div>
            </div>
        </div>
    );
};

export default HomeService;