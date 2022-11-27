import React, { useEffect, useState } from 'react';
import AdvertiseItemDisplay from './AdvertiseItemDisplay';

const AdvertiseItem = () => {

    const [advertisedItem, setAdvertisedItem] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-site.vercel.app/advertise')
            .then(res => res.json())
            .then(data => setAdvertisedItem(data))
    }, [])


    return (

        <div className='my-24'>
            <h1 className='text-4xl font-semibold text-center'>Advertised Item...</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28  mt-10'>
                {
                    advertisedItem.map(advertise =>
                        advertise.status === 'advertise' && <AdvertiseItemDisplay
                            key={advertise._id}
                            advertise={advertise}
                        ></AdvertiseItemDisplay>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItem;