import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

export default function Login({ loginButton, setLoginButton, registerButton, setRegisterButton }) {

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            setLoginButton(!loginButton);
        }
    };

    const handleRegister = () => {
        setLoginButton(!loginButton)
        setRegisterButton(!registerButton)
    }

    return (
        <AnimatePresence>
            {loginButton &&
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50'
                    initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
                    animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    exit={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
                    onClick={handleClickOutside}
                >
                    <div className='relative flex flex-col bg-white rounded-lg shadow-lg transition-all duration-300 w-80 mx-auto'>
                        <div className='flex flex-row justify-between items-center py-4 px-8 font-semibold text-2xl text-center bg-gray-200 rounded-t-lg'>
                            <p>Üye Girişi</p>
                            <button onClick={() => setLoginButton(!loginButton)}>
                                <RxCross2 />
                            </button>
                        </div>
                        <div className="p-6">
                            <input className='border border-gray-300 rounded-md mb-4 py-2 px-4 block w-full' type="text" placeholder="E-posta" />
                            <input className='border border-gray-300 rounded-md mb-6 py-2 px-4 block w-full' type="password" placeholder="Şifre" />
                            <button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md w-full'>Giriş Yap</button>
                            <p className='text-gray-600 text-sm mt-3 text-center'>Hesabınız yok mu? <button onClick={() => handleRegister()} className='text-green-600 font-semibold'>Kayıt Ol</button></p>
                        </div>
                    </div>
                </motion.div>}
        </AnimatePresence>
    );
}
