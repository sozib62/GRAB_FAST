import React from 'react';
import bannerImg from '../../../../Assets/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            {/* <div className='w-full flex items-center'>
                <h1 className="text-4xl">Different types of used mobiles are available here</h1>
            </div> */}
            <div className='w-full '>
                <img className='h-96' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;