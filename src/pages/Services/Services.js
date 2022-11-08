import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeService from '../../shared/HomeService/HomeService';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                services.map(service => <HomeService key={service._id} service={service}></HomeService>)
            }
        </div>
    );
};

export default Services;