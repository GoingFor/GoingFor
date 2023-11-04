import React, { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios';

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

    const login = async(email, password) => {
        try {
            const response = await axios.post('/api/auth/signin', {
                email,
                password
            });
            
            setUser(response);
            setIsAuthenticated(true);
            alert('Einloggen erfolgreich.');

        } catch(err){
            alert(`Login fehlgeschlagen, ${err.message}`);
        }
    }

    const getUserData = async() => {
        try {
            const {data} = await axios.get('/api/user/profile');
            setUser(data.user);
            // console.log(response.data.user.username);
            // return response.data;

        } catch(err){
            alert(`Fehler beim Abrufen der Benutzerdaten, ${err.message}`);
        }
    }

    useEffect(() => {
        if(!isAuthenticated) {
            return;
        }
        getUserData();
    }, [isAuthenticated]);


    return(
        <AuthContext.Provider 
            value={{ 
                user, 
                isAuthenticated,
                login,
                getUserData
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

