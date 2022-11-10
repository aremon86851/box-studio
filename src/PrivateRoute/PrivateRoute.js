import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ReactContext)
    const location = useLocation()
    if (loading) {
        return <button className="btn btn-square loading bg-white text-black border-0"></button>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;