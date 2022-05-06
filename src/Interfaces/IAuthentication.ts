import { IAction } from "./IAction";
import { IUser } from "./IUser";

export interface IAuthentication {
  user: IUser | null;
  isLogged: boolean;
}

export interface IAuthenticationContext {
  auth: IAuthentication;
  dispatch: React.Dispatch<IAction>;
}
