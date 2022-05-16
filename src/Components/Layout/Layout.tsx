import { useContext } from "react";
import { AuthContext } from "../../Context/Auth.Context";
import { ChildrenProps } from "../../Types/ChildrenProps"
import Logout from "./Logout";
import pokeballLogo from '../../Assets/pokeball_logo.png';

const Layout = ({children}: ChildrenProps) => {
    
   const {auth} = useContext(AuthContext); 
   
  return (
    <>
    {
        auth.isLogged && 
        <div>
          <nav className="navbar bg-light">
            <div className="container-fluid">              
                <img src={pokeballLogo} alt="" width="24" height="24" className="d-inline-block align-text-top" />
                usuario conectado { auth.user?.name } - {auth.user?.user}
                <Logout></Logout>
            </div>
          </nav>
        </div>        
    }
    <div>
        {children}
    </div>
    </>
  )
}

export default Layout