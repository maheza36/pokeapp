import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth.Context";
import { useForm } from "../Hooks/useForm";
import { IAuthenticationContext } from "../Interfaces/IAuthentication";
import { IFormLogin } from "../Interfaces/IFormLogin";
import { IUser } from "../Interfaces/IUser";
import { LoginTypes } from "../Types/types";
import styles from "./Login.module.css"
import pokeballLogo from '../Assets/pokeball_logo.png';

const Login = () => {
  const formState: IFormLogin = {
    user: "",
    userName: "",
  };

  const { handleChange, handleSubmit, form } = useForm(
    loginCallback,
    formState
  );

  const { dispatch } = useContext(AuthContext) as IAuthenticationContext;

  async function loginCallback() {
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
      <div className={`${styles["text-center"]} ${styles["body"]}`}>
        <main className={`${styles["form-signin"]} w-100 m-auto`}>
          <form onSubmit={handleSubmit}>
          <img className="mb-4" src={pokeballLogo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 fw-normal">
            Ingrese sus datos
          </h1>
            
              <div className="form-floating">
                <input
                className="form-control"
                  type="text"
                  name="user"
                  id="user"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                ></input>
                <label htmlFor="user">Usuario</label>
              </div>
              <div className="form-floating">
                <input
                className="form-control"
                  type="text"
                  name="userName"
                  id="userName"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                ></input>
                <label htmlFor="userName">Nombre Completo</label>
              </div>
              <button type="submit" className="w-100 btn btn-lg btn-primary" style={{marginTop:"10px"}}>Ingresar</button>            
          </form>
        </main>
      </div>      
    </>
  );
};

export default Login;
