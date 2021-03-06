import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { AuthContext } from '../Context/Auth.Context';
import { AuthInitState } from '../Helpers/AuthInitState';
import { IAuthentication } from '../Interfaces/IAuthentication';
import { authReducer } from '../Reducers/Auth.Reducer';
import { AuthStateType } from '../Types/types';
import Battle from '../Views/Battle';
import Login from '../Views/Login';
import Selection from '../Views/Selection';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoute from './PublicRoute';

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
      <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute redirect='/selection'>
            <Login />
          </PublicRoute>
        }>

        </Route>
        <Route path='*' element={
          <ProtectedRoutes>
            <Routes>
              <Route path='/' element={<Selection />}></Route>
              <Route path='/Selection' element={<Selection />}></Route>
              <Route path='/Battle' element={<Battle />}></Route>
            </Routes>
          </ProtectedRoutes>
        }></Route>
      </Routes>
      </BrowserRouter>
      </Layout>
    </AuthContext.Provider>
  );
}

export default AppRoutes