import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context'
import { ChildrenProps } from '../Types/ChildrenProps';


const ProtectedRoutes = ({children}: ChildrenProps) => {
    const {auth} = useContext(AuthContext);
    if(auth.isLogged){
        return children;
    }else{
        return <Navigate to="/login" replace={true} />;
    }
  
}

export default ProtectedRoutes