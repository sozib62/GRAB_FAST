import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayData from './DisplayData';

const Xiaomi = () => {
    const xiaomisData = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                xiaomisData.map(xiaomiData => <DisplayData
                    key={xiaomiData._id}
                    xiaomiData={xiaomiData}
                ></DisplayData>)
            }
        </div>
    );
};

export default Xiaomi;