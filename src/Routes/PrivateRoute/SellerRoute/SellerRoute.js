import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../Component/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useSeller from '../../../Hooks/useSeller/useSeller';

const SellerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [seller, sellerLoading] = useSeller(user?.email)
    const location = useLocation();

    if (loading || sellerLoading) {
        return <Loading></Loading>
    }

    if (user && seller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;