import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context'

export type ProtectedRouteProps = {
    children: JSX.Element;
};

const ProtectedRoutes = ({children}: ProtectedRouteProps) => {
    const {auth} = useContext(AuthContext);
    if(auth.isLogged){
        return children;
    }else{
        return <Navigate to="/login" replace={true} />;
    }
  
}

export default ProtectedRoutes