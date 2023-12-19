import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggenIn, setIsLoggedIn] = useState('false');

    const login = () => {
        //handle login
    }

    const logout = () => {
        //handle logout
    }

    return (
        <AuthContext.Provider
            value={{isLoggenIn, login, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}