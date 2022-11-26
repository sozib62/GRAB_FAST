import React from 'react';
import error from '../../Assets/error.jpg'
const Error = () => {
    return (
        <div className='text-center mt-64'>
            <h1 className='text-5xl font-semibold'>This server is Not Found <span className=' text-red-500'>404</span></h1>
            <img className='mx-auto mt-8 w-[400px]' src={error} alt="" />
        </div>
    );
};

export default Error;