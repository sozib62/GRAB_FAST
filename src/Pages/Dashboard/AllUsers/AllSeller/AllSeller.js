import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../../Component/Loading/Loading';

const AllSeller = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
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
            <h1 className='text-2xl'>All Sellers</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Seller email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => seller.role === 'Seller'
                                &&
                                <tr key={seller._id}>
                                    <th>{seller.name}</th>
                                    <th>{seller.email}</th>
                                    <th><button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-error'>delete</button></th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;