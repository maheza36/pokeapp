
import { IAuthentication } from "../Interfaces/IAuthentication";
import { AuthStateType } from "../Types/types"

export const AuthInitState = () : IAuthentication =>  
{
    const authLocalUser = localStorage.getItem(AuthStateType.UserAuthInfo);
    if(authLocalUser){
        return JSON.parse(authLocalUser);
    }else{
        return {
            user: null,
            isLogged: false            
        };
    }
}; 
