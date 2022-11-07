import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/Banner/1.jpg'
import img2 from '../../../images/Banner/2.jpg'
import img3 from '../../../images/Banner/3.jpg'
import img4 from '../../../images/Banner/4.jpg'
import img5 from '../../../images/Banner/5.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full banner-image'>
                    <img alt="" src={img1} className="w-full h-96  rounded-xl" />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 top-1/4 left-10">
                    <h2 className='text-white text-4xl font-semibold'>Welcome to <span className='font-bold text-5xl italic'><span>Box</span> <span className='underline'>Studio</span></span></h2>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 top-2/4 left-10">
                    <p className='text-white text-center md:text-left'>Hey my name is <span className='uppercase italic font-semibold'>jimmy jackson .</span>and i'm <br /> a <span className='font-semibold italic underline mr-2'>wildlife photographer.</span>Explore my <br /> website and see my works
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-10 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='w-full banner-image'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                        <img alt="" src={img2} className="w-full h-96 rounded-l-xl" />
                        <img alt="" src={img3} className="w-full h-96 rounded-r-xl md:rounded-none" />
                        <img alt="" src={img4} className="w-full hidden md:block h-96" />
                        <img alt="" src={img5} className="w-full hidden md:block h-96 rounded-r-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 top-2/4 left-10">
                    <p className='text-white text-center md:text-left'>I have more than 20 years experience in this field. <br /> Actually addicted in wild photography. You <br /> can see my works in <Link to='/services' className='italic underline text-blue-400 font-semibold'>Service</Link> page</p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 mt-20 top-2/4 left-10 hidden md:block ">
                    <Link to='/services'><button className='btn text-white italic'>Services</button></Link>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-10 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div >
    );
};

export default Banner;