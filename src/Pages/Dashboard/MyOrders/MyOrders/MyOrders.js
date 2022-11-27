import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = (`https://assignment-12-server-site.vercel.app/bookings?email=${user?.email}`)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-4xl my-4'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Category Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length &&
                            bookings?.map((booking, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{booking.userName}</td>
                                <td>{booking.categoryName}</td>
                                <td>$ {booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'
                                            >pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-primary'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;