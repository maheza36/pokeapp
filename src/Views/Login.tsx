import React, { useContext } from 'react'
import { AuthContext } from '../Context/Auth.Context';
import { useForm } from '../Hooks/useForm';
import { IAuthenticationContext } from '../Interfaces/IAuthentication';
import { IUser } from '../Interfaces/IUser'

const Login = () => {

    const formState: IUser = {
        user: "",
        userName: "",
        isLogged: false
    };

    const {handleChange, handleSubmit, form} = useForm(loginCallback, formState);

    const { user, dispatch } = useContext(AuthContext) as IAuthenticationContext;

    async function loginCallback() {
        console.table(form);
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label htmlFor='user'>Usuario</label>
                <input type="text" name="user" id="user" required onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="userName">Nombre Completo</label>
                <input type="text" name="userName" id="userName" required onChange={handleChange}></input>
            </div>
            <button type='submit'>Ingresar</button>            
        </div>
    </form>
  )
}

export default Login