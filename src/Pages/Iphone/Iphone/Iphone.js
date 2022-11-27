import axios from 'axios';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal/BookingModal';
import DisplayData from './DisplayData';

const Iphone = () => {

    const [iphonesData, setIphonesData] = useState([])
    const [categoryData, setCategoryData] = useState(null)

    axios.get('https://assignment-12-server-site.vercel.app/category/1')
        .then(res => {
            setIphonesData(res.data)
        })
        .catch(err => console.log(err))


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    iphonesData.map(iphoneData => <DisplayData
                        key={iphoneData._id}
                        iphoneData={iphoneData}
                        setCategoryData={setCategoryData}
                    ></DisplayData>)
                }
            </div>
            {
                categoryData &&
                <BookingModal
                    categoryData={categoryData}
                    setCategoryData={setCategoryData}
                ></BookingModal>
            }
        </div>
    );
};

export default Iphone;