import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';
import useBuyer from '../../../Hooks/useBuyer/useBuyer';
import useSeller from '../../../Hooks/useSeller/useSeller';
import Footer from '../../../Pages/shared/Footer/Footer/Footer';
import Navbar from '../../../Pages/shared/Navbar/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [seller] = useSeller(user?.email)
    const [buyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            buyer &&
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                            </>
                        }

                        {
                            seller &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                                <li><Link to='/dashboard/seeproduct'>My Product</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;