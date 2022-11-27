import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Component/Loading/Loading';
const SeeProduct = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-site.vercel.app/product');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        fetch(`https://assignment-12-server-site.vercel.app/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Delete Success')
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className="text-3xl">My Product-{products.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Purchase</th>
                            <th>Action</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{product.sellerName}</td>
                                <td>{product.productName}</td>
                                <td>$ {product.price}</td>
                                <td>{product.phone}</td>
                                <td>{product.year_of_purchase}</td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                <td><button className='btn btn-xs btn-primary'>Advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeeProduct;