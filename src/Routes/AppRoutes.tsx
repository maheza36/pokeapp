import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context';
import { AuthInitState } from '../Helpers/AuthInitState';
import { IAuthentication } from '../Interfaces/IAuthentication';
import { authReducer } from '../Reducers/Auth.Reducer';
import { AuthStateType } from '../Types/types';
import Login from '../Views/Login';
import Selection from '../Views/Selection';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
  const [auth, dispatch] = useReducer(
      authReducer, 
      null,
      AuthInitState);

  useEffect(() => {
    if(auth.isLogged){
      const userSession: IAuthentication = {
        user: auth.user,
        isLogged: auth.isLogged
      };
      localStorage.setItem(AuthStateType.UserAuthInfo, JSON.stringify(userSession));
    }else{
      localStorage.removeItem(AuthStateType.UserAuthInfo);
    }
  },[auth, auth.isLogged]);
  
  return (
    <AuthContext.Provider value={{auth, dispatch}}>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='*' element={
          <ProtectedRoutes>
            <Routes>
              <Route path='/' element={<Selection />}></Route>
              <Route path='/Selection' element={<Selection />}></Route>
            </Routes>
          </ProtectedRoutes>
        }></Route>
      </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default AppRoutes