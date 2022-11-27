import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal/BookingModal';
import DisplayData from './DisplayData';

const Xiaomi = () => {

    const [xiaomisData, setXiaomisData] = useState([])
    const [categoryData, setCategoryData] = useState(null)

    useEffect(() => {
        fetch('https://assignment-12-server-site.vercel.app/category/3')
            .then(res => res.json())
            .then(data => setXiaomisData(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    xiaomisData.map(xiaomiData => <DisplayData
                        key={xiaomiData._id}
                        xiaomiData={xiaomiData}
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

export default Xiaomi;