import { IUser } from "../Interfaces/IUser";
import { LoginTypes } from "../Types/types";

export const authReducer = (state: IUser, action: { type: LoginTypes; payload: IUser; }) => {
    switch (action.type) {
      case LoginTypes.Login:
        return {
          ...state,
          user: action.payload,
          isLogged: true,
        };
  
      case LoginTypes.LogOut:
        return {
          ...state,
          user: null,
          isLogged: false,
        };
  
      default:
        return state;
    }
  };