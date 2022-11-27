import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../../Component/Loading/Loading';

const AllSeller = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-site.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        fetch(`https://assignment-12-server-site.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Delete Success')
                    refetch()
                }
            })
    }
    const handleVerified = id => {
        fetch(`https://assignment-12-server-site.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Seller Verified Success')
                    refetch()
                }
            })
    }


    return (
        <div>
            <h1 className='text-2xl'>All Sellers</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Verified Badge</th>
                            <th>Seller Name</th>
                            <th>Seller email</th>
                            <th>Action</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => seller.role === 'Seller'
                                &&
                                <tr key={seller._id}>
                                    <th>
                                        {
                                            seller?.status === 'verified' &&
                                            <input type="checkbox" checked className="checkbox checkbox-primary" />
                                        }
                                    </th>
                                    <th>{seller.name}</th>
                                    <th>{seller.email}</th>
                                    <th><button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-error'>delete</button></th>
                                    {
                                        seller?.status === 'verified' ?
                                            <th><button onClick={() => handleVerified(seller._id)} className='btn btn-xs btn-primary'>verified</button></th>
                                            :
                                            <th><button onClick={() => handleVerified(seller._id)} className='btn btn-xs btn-primary'>Unverified</button></th>
                                    }
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;