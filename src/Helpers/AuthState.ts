
import { IUser } from "../Interfaces/IUser"
import { AuthStateType } from "../Types/types"
import { ExistItem, GetItem } from "./LocalStorageHelper"

export const AuthState = () : IUser =>  
    ExistItem(AuthStateType.UserAuthInfo) 
    ? JSON.parse(GetItem(AuthStateType.UserAuthInfo)) 
    :  {
        user: "",
        userName: "",
        isLogged: false
    }; 
