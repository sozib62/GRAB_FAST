import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';
import useBuyer from '../../../Hooks/useBuyer/useBuyer';
import useSeller from '../../../Hooks/useSeller/useSeller';

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [seller] = useSeller(user?.email)
    const [buyer] = useBuyer(user?.email)

    return (
        <div className='text-center mt-20'>
            {
                isAdmin && <h2 className='text-4xl font-semibold'>See All Users</h2>
            }
            {
                seller && <h2 className='text-4xl font-semibold'>See Your Product</h2>
            }
            {
                buyer && <h2 className='text-4xl font-semibold'>See Your Orders</h2>
            }
        </div>
    );
};

export default Dashboard;