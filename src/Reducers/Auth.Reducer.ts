import { IAction } from "../Interfaces/IAction";
import { IAuthentication } from "../Interfaces/IAuthentication";
import { LoginTypes } from "../Types/types";

export const authReducer = (
  state: IAuthentication,
  action: IAction
): IAuthentication => {
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
