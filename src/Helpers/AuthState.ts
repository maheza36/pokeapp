import { IAuthentication } from "../Interfaces/IAuthentication";
import { AuthStateType } from "../Types/types";

export const AuthState = (): IAuthentication => {
  return localStorage.getItem(AuthStateType.UserAuthInfo)
    ? JSON.parse(localStorage.getItem(AuthStateType.UserAuthInfo) as string)
    : { user: null, isLogged: false };
};
