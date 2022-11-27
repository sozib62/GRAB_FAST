import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ categoryData, setCategoryData }) => {

    const { user } = useContext(AuthContext)
    const { name, resale_price } = categoryData;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;

        // console.log(name, email, categoryName, price, location, phone);

        const booking = {
            userName: name,
            email,
            categoryName: categoryName,
            price,
            location,
            phone,
        }
        // console.log(booking);

        fetch('https://assignment-12-server-site.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged === true) {
                    setCategoryData(null);
                    toast.success('Booking Success')
                }
                else {

                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="categoryName" type="text" defaultValue={name} disabled placeholder="Name" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={resale_price} disabled placeholder="price" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" required />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;