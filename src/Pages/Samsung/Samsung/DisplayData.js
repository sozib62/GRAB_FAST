import React from 'react';

const DisplayData = ({ samsungData, setCategoryData }) => {
    const { name, location, original_price, sellerName, picture, resale_price, years_of_use } = samsungData;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-[400px]' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>Location:{location}</p>
                <p>original_price:${original_price}</p>
                <p>Resale_Price:${resale_price}</p>
                <p> years_of_use:{years_of_use}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal"
                        className="btn btn-primary
                     text-white"
                        onClick={() => setCategoryData(samsungData)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;