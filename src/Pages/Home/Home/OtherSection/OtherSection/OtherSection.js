import React from 'react';

const OtherSection = () => {
    return (
        <section className='my-20 mx-auto'>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold'>Sell Your Gadget in 3 Steps</h2>
                <p>Book a free pickup from your home or work at a time slot as per your convenience</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                <div className="card w-96 bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-semibold my-5">Check Price</h2>
                        <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-semibold my-5">Schedule Pickup</h2>
                        <p>Book a free pickup from your home or work at a time slot as per your convenience</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-semibold my-5">Get paid instantly</h2>
                        <p>Did we mention you get paid as soon as our executive picks up your device? It’s instant & secure payment all the way!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherSection;