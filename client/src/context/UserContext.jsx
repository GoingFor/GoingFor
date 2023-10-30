import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    useEffect(() => {
        if(!user) {
            axios.get('/user/profile')
        }
    }, []);

    return(
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )

}