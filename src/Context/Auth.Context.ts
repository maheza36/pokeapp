import { createContext } from "react";
import {
  IAuthentication,
  IAuthenticationContext,
} from "../Interfaces/IAuthentication";

export const AuthContext = createContext<IAuthenticationContext>({
  auth: {} as IAuthentication,
  dispatch: () => {},
});
