import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context';
import { PublicRouteProps } from '../Types/PublicRouteProps';

const PublicRoute = ({children, redirect}: PublicRouteProps) => {
    const {auth} = useContext(AuthContext);
    if(auth.isLogged){
        return <Navigate to={redirect} replace={true} />;
    }else{
        return children;
    }
}

export default PublicRoute