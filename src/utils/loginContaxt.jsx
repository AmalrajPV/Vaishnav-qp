import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext(false);

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("login")) || false);
    const [usertype, setUsertype] = useState(localStorage.getItem("user_type") || null);
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("login")));
        setUsertype(localStorage.getItem("user_type"));
    }, []);
    const login = (token, user_type) =>{
        setUser(true);
        setUsertype(user_type);
        localStorage.setItem("login", true);
        localStorage.setItem("access_token", token);
        localStorage.setItem("user_type", user_type);
    }

    const logout = () =>{
        setUser(false);
        setUsertype(null);
        localStorage.removeItem("login");
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_type");
    }

    return (
    <AuthContext.Provider value={{user, login, logout, usertype}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}