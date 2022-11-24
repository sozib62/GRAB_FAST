import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayData from './DisplayData';

const Samsung = () => {
    const samsungsData = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                samsungsData.map(samsungData => <DisplayData
                    key={samsungData._id}
                    samsungData={samsungData}
                ></DisplayData>)
            }
        </div>
    );
};

export default Samsung;