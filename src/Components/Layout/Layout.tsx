import { useContext } from "react";
import { AuthContext } from "../../Context/Auth.Context";
import { ChildrenProps } from "../../Types/ChildrenProps"
import Logout from "./Logout";

const Layout = ({children}: ChildrenProps) => {
    
   const {auth} = useContext(AuthContext); 
   
  return (
    <>
    {
        auth.isLogged && 
        <div>
          <div>usuario conectado { auth.user?.name } - {auth.user?.user}</div>
          <Logout></Logout>
        </div>
    }
    <div>
        {children}
    </div>
    </>
  )
}

export default Layout