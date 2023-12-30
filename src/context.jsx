import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [error, setError] = useState(false);

    const login = async (user) => {
        try {
            const res = await fetch("http://localhost:8800/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Bu, withCredentials'ın karşılığıdır
                body: JSON.stringify(user),
            });
            const data = await res.json();
            setCurrentUser(data)
            return data
        } catch (err) {
            console.log(err.message || "Bir hata oluştu");
        }
    };

    const logout = async () => {
        try {
            fetch("http://localhost:8800/auth/logout", {
                method: 'POST',
                credentials: 'include',
            });
            console.log("çıkış yapıldı")
            setCurrentUser(null);
        } catch (err) {
            console.log(err.message || "Bir hata oluştu");
        }
    };


    const hocaDersler = async (hocaID) => {
        try {
            const res = await fetch(`http://localhost:8800/lesson/myLessons/${hocaID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', 
            });
            const data = await res.json();
            console.log(data)
            return data
        } catch (err) {
            console.log(err.message || "Bir hata oluştu");
        }
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, hocaDersler, error }}>
            {children}
        </AuthContext.Provider>
    );
};
