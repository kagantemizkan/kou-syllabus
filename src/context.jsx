import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [error, setError] = useState(false);

    const login = async (user) => {
        try {
            const res = await fetch("http://localhost:8800/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Bu, withCredentials'ın karşılığıdır
                body: JSON.stringify(user),
            });
            const data = await res.json();
            return data
        } catch (err) {
            setError(err.message || "Bir hata oluştu");
        }
    };

    const logout = async () => {
        try {
            await fetch("http://localhost:8800/user/logout", {
                method: 'POST',
                credentials: 'include',
            });

            setCurrentUser(null);
        } catch (err) {
            setError(err.message || "Bir hata oluştu");
        }
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};
