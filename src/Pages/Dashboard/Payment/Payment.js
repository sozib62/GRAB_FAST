import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Component/Loading/Loading';
import CheckOutFrom from './CheckOutFrom';


const stripePromise = loadStripe('process.env.REACT_APP_STRIPE_KEY')

const Payment = () => {

    const booking = useLoaderData();
    const { categoryName } = booking;

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl'>Payment for {categoryName}</h1>

            <div className='w-96 py-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;