import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Achivement from './Achivement/Achivement';
import Banner from './Banner/Banner';
import HomeService from '../../shared/HomeService/HomeService';
import MyWorks from './MyWorks/MyWorks';
import { useTitle } from '../../hooks/useTitle';

const Home = () => {
    const services = useLoaderData()
    useTitle('Home')
    return (
        <div>
            {/* Banner section */}
            <Banner></Banner>
            {/* Home Service Section */}
            <div className='mb-10'>
                <h2 className='text-5xl font-bold text-red-600 italic mt-16'>Services</h2>
                <div className='grid grid-cols-3 gap-7 mt-8 mb-10'>
                    {
                        services.map(service => <HomeService key={service._id} service={service}></HomeService>)
                    }
                </div>
                <Link to="/services"><button className="btn btn-primary italic mt-5">See all..</button></Link>
            </div>
            {/* About me section */}
            <div>
                <AboutMe></AboutMe>
            </div>
            {/* My works page */}
            <div>
                <h2 className='text-5xl font-bold text-red-600 italic mt-16 mb-16'>My Works</h2>
                <MyWorks></MyWorks>
            </div>
            {/* Achivement page added */}
            <div>
                <h2 className='text-5xl font-bold text-red-600 italic mt-16'>Achievement</h2>
                <Achivement></Achivement>
            </div>
        </div >
    );
};

export default Home;