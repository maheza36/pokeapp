import { createContext } from "react";
import { IAuthenticationContext } from "../Interfaces/IAuthentication";

export const AuthContext = createContext<IAuthenticationContext | null>(null);
