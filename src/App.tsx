import React, { useReducer } from "react";
import "./App.css";
import { AuthContext } from "./Context/Auth.Context";
import { AuthState } from "./Helpers/AuthState";
import { authReducer } from "./Reducers/Auth.Reducer";
import Login from "./Views/Login";

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
        <Login></Login>
      </AuthContext.Provider>
    </>
  );
}

export default App;
