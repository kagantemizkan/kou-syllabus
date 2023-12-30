import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export const Settings = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    );

    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div>
            <nav className="flex items-center justify-between px-5 py-2 border-b-2 dark:border-zinc-800 border-gray-200">
                <div className="flex items-center gap-3">
                    <Sidebar />
                    <p>Ayarlar</p>
                </div>
            </nav>
            <div className='flex flex-col justify-center items-center h-[525px]'>
                <div className="flex flex-col w-1/4 border-2 dark:border-zinc-800 border-gray-200 rounded-xl">
                    <button className="flex justify-between items-center p-4 border-b-2 dark:border-b-zinc-800 border-b-gray-200">
                        Kişisel Bilgiler
                        <FaUser className='text-2xl' />
                    </button>
                    <button className="flex justify-between items-center p-4 border-b-2 dark:border-b-zinc-800 border-b-gray-200">
                        Şifre İşlemleri
                        <PiPasswordBold className='text-2xl' />
                    </button>
                    <button onClick={() => changeTheme()} className="flex justify-between items-center p-4">
                        Tema Tercihi
                        {theme === "dark" ? <CiDark className='text-2xl' /> : <CiLight className='text-2xl' />}
                    </button>
                </div>
            </div>
        </div>
    );
};