import React from 'react'
import KOULogo from '../assets/kouLogo.webp'
import { GoDotFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export default function Header({ loginButton, setLoginButton}) {
    const navigate = useNavigate();

    return (
        <div className='bg-[#08A250] mb-8'>
            <div className='text-white flex flex-row items-center justify-between mx-48 py-4'>
                
                <button onClick={() => navigate('/')} className='flex flex-row items-center justify-center gap-3'>
                    <img src={KOULogo} className='w-20' alt="Kocaeli Universitesi Logo" />
                    <p className='deneme flex flex-col'>Umuttepe <br /><span className='break-words text-left'>Turizm</span></p>
                </button>

                <div className='flex flex-row items-center text-center'>
                    <button onClick={() => navigate('/sss')} className='text-xl font-semibold'>S.S.S</button>
                    <GoDotFill className='mx-3 text-xs' />
                    <button onClick={() => navigate('/pnr-sorgu')} className='text-xl font-semibold'>Seyahat Sorgula</button>
                    <GoDotFill className='mx-3 text-xs' />
                    <button onClick={()=> setLoginButton(!loginButton)} className='text-xl font-semibold'>Üye Girişi</button>
                </div>
            </div>
        </div>
    )
}
