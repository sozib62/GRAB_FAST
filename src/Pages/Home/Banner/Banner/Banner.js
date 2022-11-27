import React from 'react';
import bannerImg from '../../../../Assets/banner.jpg'

const Banner = () => {
    return (
        <div className=' w-full lg:w-full'>
            <img className='h-[250px] lg:h-96' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;