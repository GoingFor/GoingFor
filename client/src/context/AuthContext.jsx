import React, { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios';

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    // const [ error, setError ] = useState({});

    useEffect(() => {
        if(!isAuthenticated) {
            return;
        }
    }, []);

    const login = async(email, password) => {
        try {
            const response = await axios.post('/api/auth/signin', {
                email,
                password
            });
            
            setUser(response);
            setIsAuthenticated(true);
            console.log('Frontend AuthContext: Einloggen erfolgreich.');

        } catch(error){
            console.log('Auth Context Login: Error empfangen aus backend:', error.response.data);
        }
    }

    const getUserData = async() => {
        if(isAuthenticated) {
            try {
                const {data} = await axios.get('/api/user/getdata');
                setUser(data.user);
            } catch(error) {
                console.log('Auth Context getUserData: Fehler beim Abrufen der Benutzerdaten', error.message)
            }     
        }
}

    const logout = async() => {
        try {
            const response = await axios.post('/api/auth/signout');
            setUser(response);
            console.log('Auth Context Logout: Meldung vom backend:', response.data.msg);
            setIsAuthenticated(false);
        } catch (error) {
            console.log('Auth Context Logout: Fehler beim Ausloggen', error);
        }
    }

    return(
        <AuthContext.Provider 
            value={{ 
                user, 
                isAuthenticated,
                login,
                getUserData,
                logout
                // setError
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

