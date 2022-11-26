import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../Component/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useBuyer from '../../../Hooks/useBuyer/useBuyer';


const BuyerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [buyer, buyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    if (loading || buyerLoading) {
        return <Loading></Loading>
    }

    if (user && buyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;