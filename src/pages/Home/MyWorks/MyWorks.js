import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from '../../../images/myworks/1.jpg'
import img2 from '../../../images/myworks/2.jpg'
import img3 from '../../../images/myworks/3.jpg'
import img4 from '../../../images/myworks/4.jpg'
import img5 from '../../../images/myworks/5.jpg'
import img6 from '../../../images/myworks/6.jpg'
import img7 from '../../../images/myworks/7.jpg'
import img8 from '../../../images/myworks/8.jpg'

const MyWorks = () => {
    return (
        <div className='mx-5'>
            <PhotoProvider>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <PhotoView src={img1}>
                        <img src={img1} alt="" className='w-full h-full cursor-pointer' />
                    </PhotoView>
                    <PhotoView src={img2}>
                        <img src={img2} alt="" className='w-full h-full cursor-pointer' />
                    </PhotoView>
                    <PhotoView src={img3}>
                        <img src={img3} alt="" className='w-full h-full cursor-pointer' /></PhotoView>
                    <PhotoView src={img4}>
                        <img src={img4} alt="" className='w-full h-full cursor-pointer' />
                    </PhotoView>
                    <PhotoView src={img5}>
                        <img src={img5} alt="" className='w-full h-full cursor-pointer' />
                    </PhotoView>
                    <PhotoView src={img6}>
                        <img src={img6} alt="" className='w-full h-full cursor-pointer' /></PhotoView>
                    <PhotoView src={img7}>
                        <img src={img7} alt="" className='w-full h-full cursor-pointer' />
                    </PhotoView>
                    <PhotoView src={img8}>
                        <img src={img8} alt="" className='w-full h-full cursor-pointer' />
                    </PhotoView>
                </div>
            </PhotoProvider>
        </div>

    );
};

export default MyWorks;