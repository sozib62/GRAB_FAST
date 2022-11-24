import React from 'react';
import bannerImg from '../../../../Assets/mobile-phones-banner.jpg'

const Banner = () => {
    return (
        <div className=' flex justify-between'>
            <div className='w-full flex items-center'>
                <h1 className="text-4xl">Different types of used mobiles are available here</h1>
            </div>
            <div className='w-[800px] '>
                <img className='h-64' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;