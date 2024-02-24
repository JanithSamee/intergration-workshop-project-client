import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext(null);

export default function useAuthContext() {
    return useContext(authContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    /**
     * {
     *      username:"",
     *      _id:"",
     *      token:""
     * }
     */

    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, []);

    return (
        <authContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </authContext.Provider>
    );
}
