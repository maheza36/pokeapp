import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth.Context";
import { useForm } from "../Hooks/useForm";
import { IAuthenticationContext } from "../Interfaces/IAuthentication";
import { IFormLogin } from "../Interfaces/IFormLogin";
import { IUser } from "../Interfaces/IUser";
import { LoginTypes } from "../Types/types";

const Login = () => {
  const formState: IFormLogin = {
    user: "",
    userName: "",
  };

  const { handleChange, handleSubmit, form } = useForm(
    loginCallback,
    formState
  );

  const { auth, dispatch } = useContext(AuthContext) as IAuthenticationContext;

  console.log(auth);

  async function loginCallback() {
    /* try {
        const peticion al back
        creacion de usuario nuevo con datos del back
        
    } catch (error) {
        
    } */

    const newUser: IUser = {
      user: form.user,
      name: form.userName,
      timestamp: Number(new Date()),
      token: "viene del back",
    };

    dispatch({ type: LoginTypes.Login, payload: newUser });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="user">Usuario</label>
            <input
              type="text"
              name="user"
              id="user"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="userName">Nombre Completo</label>
            <input
              type="text"
              name="userName"
              id="userName"
              required
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
      {auth.isLogged && <h1>Bienvenido</h1>}
    </>
  );
};

export default Login;
