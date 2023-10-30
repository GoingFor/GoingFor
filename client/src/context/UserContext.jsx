import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser ] = useState(null);
    return(
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )

}