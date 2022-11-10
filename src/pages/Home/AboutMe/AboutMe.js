import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img alt="" src="https://i.ibb.co/ZYMV4K8/pexels-rick-ortegon-escobar-13796498.jpg" className="w-full rounded-lg shadow-2xl" />
                <div className='text-left'>
                    <h1 className="text-5xl text-red-600 font-bold">About Me !</h1>
                    <p className="py-6 text-xl font-semibold italic">Hey, i'm Jimmy Jackson. I am professional wildlife photographer.I have too much experiences in this photographer field. Anyone can hire or also buy my picture which is clicked by me . Why i am in this field? Actually i love this field or also :-
                        <ul className='md:ml-10 list-disc mt-5'>
                            <li className='mb-2'><span className='bg-gray-500 px-5 text-white rounded-lg'>Feeling a Thrill</span></li>
                            <li className='mb-2'><span className='bg-gray-500 px-5 text-white rounded-lg'>Helping the Planet</span></li>
                            <li className='mb-2'><span className='bg-gray-500 px-5 text-white rounded-lg'>Appreciating Nature</span></li>
                            <li className='mb-2'><span className='bg-gray-500 px-5 text-white rounded-lg'>Mammal Photography</span></li>
                        </ul>
                        I am to interest on Mammal Photography,Bird Photography,Underwater Photography etc.I am getting too much thrill on Mammal Photography and Underwater Photography. <br />
                        Can you want to buy my pictures which is clicked by me, then <br /> <Link to="/services" className='underline text-blue-500 uppercase font-bold'>click here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;