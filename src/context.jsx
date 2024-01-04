import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [error, setError] = useState(false);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);


    const login = async (user) => {
        try {
            const res = await fetch("http://localhost:8800/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(user),
            });
            const data = await res.json();
            console.log(data);
            if (data.ogrenci_id !== null && data.ogrenci_id !== undefined) {
                data.id = data.ogrenci_id;
                delete data.ogrenci_id;
            }
            setCurrentUser(data);
            return data;
        } catch (err) {
            console.log(err.message || "Bir hata oluştu");
        }
    };

    const register = async (user) => {
        try {
            const res = await fetch("http://localhost:8800/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(user),
            });
            const data = await res.json();
            console.log(data);
            return data;
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

    const studentLessons = async (studentID) => {
        try {
            const res = await fetch(`http://localhost:8800/lesson/studentLesson/${studentID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await res.json();
            return data
        } catch (err) {
            console.log(err.message || "Bir hata oluştu");
        }
    };

    const getProgram = async () => {
        try {
            const res = await fetch(`http://localhost:8800/program/p`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await res.json();
            return data
        } catch (err) {
            console.log(err.message || "Bir hata oluştu");
        }
    };

    const postSelectedStudentLessons = async (studentID, lessonsIDs) => {
        try {
            const res = await fetch(`http://localhost:8800/lesson/selectLesson/${studentID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ders_id: lessonsIDs }),
            });
            const data = await res.json();
            console.log("fdsfdsf: ", studentID, lessonsIDs)
            console.log(data)
            return data
        } catch (err) {
            console.log("fdsfdsf: ", studentID, JSON.stringify({ ders_id: lessonsIDs }))
            console.log(err.message || "Bir hata oluştu");
        }
    }


    const addLesson = async (hocaID, lessonName, lessonID, lessonYear, kontenjan) => {
        try {
            const res = await fetch(`http://localhost:8800/lesson/addLesson/${hocaID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:
                    JSON.stringify({
                        dersAd: lessonName,
                        dersKodu: lessonID,
                        kontenjan: kontenjan,
                        sene: lessonYear
                    }),
            });
            const data = await res.json();
            console.log(data)
            return data
        } catch (err) {
            console.log(JSON.stringify({
                dersAd: lessonName,
                dersKodu: lessonID,
                kontenjan: kontenjan,
                sene: lessonYear
            }),)
            console.log(err.message || "Bir hata oluştu");
        }
    }

    const createProgram = async () => {
        try {
            const res = await fetch(`http://localhost:8800/program/k`, {
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


    return (
        <AuthContext.Provider value={{ currentUser, login, logout, hocaDersler, studentLessons, getProgram, postSelectedStudentLessons, addLesson, register, createProgram, error }}>
            {children}
        </AuthContext.Provider>
    );
};
