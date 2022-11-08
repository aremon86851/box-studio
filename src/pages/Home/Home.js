import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Achivement from './Achivement/Achivement';
import Banner from './Banner/Banner';
import HomeService from './HomeService/HomeService';
import MyWorks from './MyWorks/MyWorks';

const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div className='mb-10'>
                <h2 className='text-5xl font-bold text-red-600 italic mt-16'>Services</h2>
                <div className='grid grid-cols-3 gap-7 mt-8 mb-10'>
                    {
                        services.map(service => <HomeService key={service._id} service={service}></HomeService>)
                    }
                </div>
                <Link to="/services"><button className="btn btn-primary italic mt-5">See all..</button></Link>
            </div>
            <div>
                <AboutMe></AboutMe>
            </div>
            <div>
                <h2 className='text-5xl font-bold text-red-600 italic mt-16'>My Works</h2>
                <MyWorks></MyWorks>
            </div>
            <div>
                <h2 className='text-5xl font-bold text-red-600 italic mt-16'>Achievement</h2>
                <Achivement></Achivement>
            </div>
        </div >
    );
};

export default Home;