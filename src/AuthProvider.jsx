/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';


const AuthContext = createContext();
    const AuthProvider = ({children}) => {
        const [auth, setAuth] = useState(false);
        const login = () => setAuth(true);
        const logout = () => setAuth(false);
  return (
      <AuthContext.Provider value={{auth, login, logout}}>
        {children}
      </AuthContext.Provider>
    );
};

export {AuthContext}
export default AuthProvider;
