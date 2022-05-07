import React, { useReducer } from "react";
import "./App.css";
import { AuthContext } from "./Context/Auth.Context";
import { AuthState } from "./Helpers/AuthState";
import { authReducer } from "./Reducers/Auth.Reducer";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  const [auth, dispatch] = useReducer(authReducer, {}, AuthState);

  return (
    <>
      <AuthContext.Provider
        value={{
          auth,
          dispatch,
        }}
      >
        <AppRoutes/>        
      </AuthContext.Provider>
    </>
  );
}

export default App;
