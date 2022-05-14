import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context';

export type ProtectedRouteProps = {
    children: JSX.Element;
    redirect: string
};

const PublicRoute = ({children, redirect}: ProtectedRouteProps) => {
    const {auth} = useContext(AuthContext);
    if(auth.isLogged){
        return <Navigate to={redirect} replace={true} />;
    }else{
        return children;
    }
}

export default PublicRoute