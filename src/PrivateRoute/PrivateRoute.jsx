import React, { use } from 'react';
import {AuthContext} from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return ( <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-dots loading-xl"></span>
        </div> );
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;