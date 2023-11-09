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
            console.log('Frontend AuthContext: Einloggen erfolgreich.', setIsAuthenticated);

        } catch(error){
            console.log('Auth Context: Error empfangen aus backend:', error.response.data);
        }
    }

    const getUserData = async() => {
        if(isAuthenticated) {
            try {
                const {data} = await axios.get('/api/user/getdata');
                setUser(data.user);
            } catch(error) {
                console.log('Fehler beim Abrufen der benutzerdaten', error.message)
            }     
        }
}

    return(
        <AuthContext.Provider 
            value={{ 
                user, 
                isAuthenticated,
                login,
                getUserData
                // setError
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

