import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline } from "react-icons/io5";

export const Settings = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    );
    const user = JSON.parse(localStorage.getItem('user'));

    const [toggleSettings, setToggleSettings] = useState('main')

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
        <div className='h-[85vh]'>
            <nav className="flex items-center justify-between px-5 py-2 border-b-2 dark:border-zinc-800 border-gray-200">
                <div className="flex items-center gap-3">
                    <Sidebar />
                    <p>Ayarlar</p>
                </div>
            </nav>

            <div className='flex justify-center items-center h-full'>
                <AnimatePresence>
                    {toggleSettings === 'main' &&
                        <motion.div
                            key='main'
                            initial={{ opacity: 0, x: '-20%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '-20%' }}
                            transition={{ duration: 0.3 }}
                            className='flex absolute flex-col w-1/4 border-2 dark:border-zinc-800 border-gray-200 rounded-xl'
                        >
                            <button onClick={() => setToggleSettings("personal")} className="flex justify-between items-center p-4 border-b-2 dark:border-b-zinc-800 border-b-gray-200">
                                Kişisel Bilgiler
                                <FaUser className='text-2xl' />
                            </button>
                            <button onClick={() => setToggleSettings("password")} className="flex justify-between items-center p-4 border-b-2 dark:border-b-zinc-800 border-b-gray-200">
                                Şifre İşlemleri
                                <PiPasswordBold className='text-2xl' />
                            </button>
                            <button onClick={() => changeTheme()} className="flex justify-between items-center p-4">
                                Tema Tercihi
                                {theme === "dark" ? <CiDark className='text-2xl' /> : <CiLight className='text-2xl' />}
                            </button>
                        </motion.div>}
                </AnimatePresence>
                <AnimatePresence>

                    {toggleSettings === 'personal' &&
                        <motion.div
                            key='personal'
                            initial={{ opacity: 0, x: '70%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '70%' }}
                            transition={{ duration: 0.3 }}
                            className='flex flex-col justify-center items-center py-3 px-3 gap-3 w-auto border-2 dark:border-zinc-800 border-gray-200 rounded-xl'
                        >
                            <button onClick={() => setToggleSettings('main')} className='flex mr-auto flex-row items-center border-2 border-zinc-800 rounded-lg hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
                                <IoChevronBackOutline size={28} />
                                <p className='py-2 pr-2.5 pl-0.5'>Ayarlar</p>
                            </button>
                            <p className='text-xl font-semibold mb-2'>Kişisel Bilgiler</p>
                            {user.sinifsenesi === null || user.sinifsenesi === undefined ? (
                                <div className='flex flex-col gap-2 w-72'>
                                    <p><span className='font-semibold'>Ad:</span> {user.hoca_ad}</p>
                                    <p><span className='font-semibold'>Soyad:</span> {user.hoca_soyad}</p>
                                    <p><span className='font-semibold'>Ünvan:</span> {user.hoca_unvan}</p>
                                    <p><span className='font-semibold'>Eposta:</span> {user.hoca_eposta}</p>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-2 w-72'>
                                    <p><span className='font-semibold'>Ad:</span> {user.ogrenci_ad}</p>
                                    <p><span className='font-semibold'>Soyad:</span> {user.ogrenci_soyad}</p>
                                    <p><span className='font-semibold'>Sınıf Senesi:</span> {user.sinifsenesi}</p>
                                    <p><span className='font-semibold'>Eposta:</span> {user.ogrenci_eposta}</p>
                                </div>
                            )}
                        </motion.div>
                    }
                </AnimatePresence>

                <AnimatePresence>
                    {toggleSettings === 'password' &&
                        <motion.div
                            key='password'
                            initial={{ opacity: 0, x: '70%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '70%' }}
                            transition={{ duration: 0.3 }}
                            className='flex flex-col justify-center items-center py-3 px-3 gap-3 w-auto border-2 dark:border-zinc-800 border-gray-200 rounded-xl'
                        >
                            <button onClick={() => setToggleSettings('main')} className='flex mr-auto flex-row items-center border-2 border-zinc-800 rounded-lg hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
                                <IoChevronBackOutline size={28} />
                                <p className='py-2 pr-2.5 pl-0.5'>Ayarlar</p>
                            </button>
                            <p className='text-xl font-semibold mb-2'>Şifre Yenile</p>
                            <input
                                name="oldpassword"
                                placeholder="Eski Şifre"
                                className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 bordershadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
                                type="text"
                            />
                            <input
                                name="oldpassword"
                                placeholder="Yeni Şifre"
                                className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 bordershadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
                                type="text"
                            />
                            <input
                                name="oldpassword"
                                placeholder="Yeni Şifre Onay"
                                className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 bordershadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
                                type="text"
                            />
                            <button className='py-1.5 px-3 text-green-400 bg-green-700/20 rounded-lg border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300'>
                                Değiştir
                            </button>
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    );
};