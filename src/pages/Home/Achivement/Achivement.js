import React from 'react';
import { Link } from 'react-router-dom';

const Achivement = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='text-left'>
                    <h1 className="text-3xl font-bold italic text-red-600">Award winning photo!</h1>
                    <p className="py-6 text-xl font-semibold italic">This photo clicked in KuwAit.jimmy trekked for four hours to meet Kibande, an almost 40-year-old mountain gorilla. ‘The more we climbed, the hotter and more humid it got,’ he recalls. As cooling rain began to fall, Kibande remained in the open, seeming to enjoy the shower. Mountain gorillas are a sub-species of the eastern gorilla, and are found at altitudes above 1,400 metres in two isolated populations: at the Virunga volcano and the Bwindi area. They are endangered by habitat loss, disease and poaching. </p>
                    <button className="btn btn-primary italic">Achievement</button>
                </div>
                <img alt="" src="https://i.ibb.co/qW5V9rV/2289.jpg" className="w-full rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Achivement;