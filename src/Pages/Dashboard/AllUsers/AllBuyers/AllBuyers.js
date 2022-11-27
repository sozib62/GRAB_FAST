import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../../Component/Loading/Loading';

const AllBuyers = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
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


    return (
        <div>
            <h1 className='text-2xl'>All Buyers</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Buyer Name</th>
                            <th>Buyer email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map(buyer => buyer.role === 'Buyer'
                                &&
                                <tr key={buyer._id}>
                                    <th>{buyer.name}</th>
                                    <th>{buyer.email}</th>
                                    <th><button onClick={() => handleDelete(buyer._id)} className='btn btn-xs btn-error'>delete</button></th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;