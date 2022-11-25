import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal/BookingModal';
import DisplayData from './DisplayData';

const Samsung = () => {

    const [samsungsData, setSamsungsData] = useState([])
    const [categoryData, setCategoryData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/category/2')
            .then(res => res.json())
            .then(data => setSamsungsData(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    samsungsData.map(samsungData => <DisplayData
                        key={samsungData._id}
                        samsungData={samsungData}
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

export default Samsung;