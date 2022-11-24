import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayData from './DisplayData';

const Iphone = () => {

    const iphonesData = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                iphonesData.map(iphoneData => <DisplayData
                    key={iphoneData._id}
                    iphoneData={iphoneData}
                ></DisplayData>)
            }
        </div>
    );
};

export default Iphone;