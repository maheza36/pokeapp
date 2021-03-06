import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Auth.Context';
import { IAuthentication, IAuthenticationContext } from '../../Interfaces/IAuthentication';
import { LoginTypes } from '../../Types/types';

const Logout = () => {

    const emptyLogin: IAuthentication = {
        isLogged: false,
        user: null
    }
    const { dispatch } = useContext(AuthContext) as IAuthenticationContext;

    const handleLogout = () => {
        dispatch({type: LoginTypes.LogOut, payload: emptyLogin})
    }

  return (
    <>
    <div className='d-flex'>
        <input type="button" className='btn btn-danger' value="Cerrar Sesión" onClick={handleLogout}></input>
    </div>
    </>
  )
}

export default Logout