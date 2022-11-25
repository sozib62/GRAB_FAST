import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal/BookingModal';
import DisplayData from './DisplayData';

const Iphone = () => {

    const [iphonesData, setIphonesData] = useState([])
    const [categoryData, setCategoryData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/category/1')
            .then(res => res.json())
            .then(data => setIphonesData(data))
    }, [])

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