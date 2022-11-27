import React from 'react';

const AdvertiseItemDisplay = ({ advertise }) => {

    const { sellerName, image, price, year_of_purchase, phone, productName } = advertise;

    return (
        <div className="card w-96 shadow-xl">
            <figure><img className='w-full h-[400px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>price: ${price}</p>
                <p> year_of_purchase: {year_of_purchase}</p>
                <p> phone: {phone}</p>
            </div>
        </div>
    );
};

export default AdvertiseItemDisplay;