import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Assets/error.jpg'
const Error = () => {
    return (
        <div className='text-center mt-64'>
            <h1 className='text-5xl font-semibold'>This server is Not Found <span className=' text-red-500'>404</span></h1>
            <img className='mx-auto mt-8 w-[400px]' src={error} alt="" />
            <h3 className='text-2xl'>Go To <strong className='text-blue-600'><Link to='/'> Home... </Link></strong></h3>
        </div>
    );
};

export default Error;