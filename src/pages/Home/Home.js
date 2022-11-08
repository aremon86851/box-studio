import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import HomeService from './HomeService/HomeService';

const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-4xl font-bold text-black italic mt-16'>Services</h2>
                <div className='grid grid-cols-3 gap-7 mt-8 mb-10'>
                    {
                        services.map(service => <HomeService key={service._id} service={service}></HomeService>)
                    }
                </div>
                <Link to="/services"><button className="btn btn-primary italic">See all..</button></Link>
            </div>
        </div>
    );
};

export default Home;