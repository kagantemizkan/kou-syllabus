import React, { useState,useContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import KOULogo from '../assets/kouLogo.webp'
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context.jsx';


export const Login = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user,setUser] = useState({
    kullaniciAdi:"",
    sifre:"",
  })
  const {login} = useContext(AuthContext)
  
    const showToastError = (message) => {
      toast.error(message, {
        position:"top-right",
        reverseOrder:false,
        style: {
          border: '2px solid #27272A',
          padding: '16px',
          color: 'white',
          backgroundColor: '#18181B',
        },
        iconTheme: {
          primary: 'red',
          secondary: 'white',
        },
        
      });
    };

    const showToastSucces = (message) => {
      toast.success(message, {
        position:"top-right",
        reverseOrder:false,
        style: {
          border: '2px solid #27272A',
          padding: '16px',
          color: 'white',
          backgroundColor: '#18181B',
        },
        iconTheme: {
          primary: 'green',
          secondary: 'white',
        },
        
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Formdaki input elemanlarına erişim
      const enteredEmail = email.trim();
      const enteredPassword = password.trim();
      user.kullaniciAdi=enteredEmail;
      user.sifre=enteredPassword;

      if (!enteredEmail && !enteredPassword) {
        setEmailError(true);
        setPasswordError(true);
        showToastError('Şifre veya Email boş bırakılamaz.');
      } else {
        setEmailError(!enteredEmail);
        setPasswordError(!enteredPassword);
      
        if (!enteredEmail) {
          showToastError('Email boş bırakılamaz.');
        } else if (!enteredPassword) {
          showToastError('Şifre boş bırakılamaz.');
        } else {
          login(user)
          // Buraya ulaşmak, her ikisi de girilmiş demektir.
          showToastSucces('Giriş başarılı!'); // Ya da istediğiniz başka bir mesaj.
          navigate("/")
        }
      }

      // Input değerlerini konsola yazdır
      console.log('Email:', enteredEmail);
      console.log('Şifre:', enteredPassword);       
    
    };

  return (
    <div className='flex h-screen items-center justify-center'>
      <Toaster />
      <div className='flex flex-col items-center border-2 border-zinc-800 rounded-xl w-96 p-8 shadow-lg bg-zinc-800/20'>
        <img src={KOULogo} className='w-32 mb-8' alt="Kocaeli Universitesi Logo" />

        <h2 className='text-2xl font-semibold mb-10 text-center'>Kocaeli Üniversitesi Syllbus'a Giriş Yap</h2>

        <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 border ${
              emailError ? 'border-red-500' : 'border-zinc-700'
            } shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
            type="text"
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
            className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 border ${
              passwordError ? 'border-red-500' : 'border-zinc-700'
            } shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
            type="password"
          />

          <div className="flex flex-row gap-4 mt-3">
            <button className="px-4 py-2 text-red-400 bg-red-700/20 rounded-xl border border-red-900 hover:border-red-700 hover:shadow-lg transition-all duration-300">Şifremi Unuttum</button>
            <button type="submit" className="flex items-center px-4 py-2 text-green-400 bg-green-700/20 rounded-xl border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300">Giriş Yap <CiLogin size={22} className='mt-0.5 ml-1.5' /> </button>
          </div>
        </form>
      </div>
    </div>
  );
};
