import React, { useState, useContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import KOULogo from '../assets/kouLogo.webp';
import Lottie from 'lottie-react';
import LoadingLottie from '../assets/animatedLoading.json';
import { CiLogin } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context.jsx';
import { motion, useAnimation } from 'framer-motion';

export const Login = () => {
  const navigate = useNavigate();
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
    userType: '',
  });

  useEffect(() => {
    checkUser()
  }, []);

  const checkUser = () => {
    if (userLocalStorage && userLocalStorage.id !== null && userLocalStorage.id !== undefined) {
      navigate('/');
      console.log('var');
      return;
    } else {
      console.log('yok');
      return;
    }
  };

  const { login } = useContext(AuthContext);

  const showToastError = (message) => {
    toast.error(message, {
      position: 'top-right',
      reverseOrder: false,
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
      position: 'top-right',
      reverseOrder: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const enteredEmail = email.trim();
    const enteredPassword = password.trim();
    user.email = enteredEmail;
    user.password = enteredPassword;

    const username = user.email.split('@')[0];

    user.userType = username.match(/^\d+$/) ? "student" : "hocalar";
    
    console.log(user.userType)

    if (!enteredEmail && !enteredPassword) {
      setEmailError(true);
      setPasswordError(true);
      showToastError('Şifre veya Email boş bırakılamaz.');
      setIsLoading(false);
    } else {
      setEmailError(!enteredEmail);
      setPasswordError(!enteredPassword);
      if (!enteredEmail) {
        showToastError('Email boş bırakılamaz.');
        setIsLoading(false);
      } else if (!enteredPassword) {
        showToastError('Şifre boş bırakılamaz.');
        setIsLoading(false);
      } else {
        const result = await login(user);

        if (result === 'Kullanıcı bulunamadı') {
          showToastError(result + '.');
          setIsLoading(false);
          return;
        }

        if (result === 'Parola hatası') {
          showToastError(result + '.');
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
        showToastSucces('Giriş başarılı!');
        navigate('/');
      }
    }
  };

  const pageAnimation = useAnimation();

  useEffect(() => {
    pageAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.45 } });
  }, [pageAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0.1, y: -40 }}
      animate={pageAnimation}
      className="flex h-screen items-center justify-center"
    >
      <Toaster />
      <div className='flex flex-col items-center border-2 border-zinc-800 rounded-xl w-96 p-8 shadow-lg bg-zinc-800/20 hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
        <img src={KOULogo} className='w-32 mb-8' alt="Kocaeli Universitesi Logo" />
        <h2 className='text-2xl font-semibold mb-10 text-center'>Kocaeli Üniversitesi Syllbus'a Giriş Yap</h2>
        <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 border ${emailError ? 'border-red-500' : 'border-zinc-700'
              } shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
            type="text"
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
            className={`w-80 font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 border ${passwordError ? 'border-red-500' : 'border-zinc-700'
              } shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
            type="password"
          />
          <div className="flex flex-row gap-4 mt-3">
            <button className="px-4 py-2 text-red-400 bg-red-700/20 rounded-md border border-red-900 hover:border-red-700 hover:shadow-lg transition-all duration-300">Şifremi Unuttum</button>
            <motion.button
              type="submit"
              onClick={() => handleSubmit()}
              className={`gap-2 ${isLoading == null ? null : isLoading ? 'animation1' : 'animation2'} h-[41px] w-[132px] flex items-center px-4 py-2 text-green-400 bg-green-700/20 rounded-md border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300`}
            >
              {isLoading ? (
                <motion.div
                  style={{ width: '100%' }} // Animasyonun boyutunu burada tanımlayın
                >
                  <Lottie
                    animationData={LoadingLottie}
                    loop={true}
                    className="-m-[20px] h-14"
                  />
                </motion.div>
              ) : (
                <React.Fragment>
                  <motion.p
                    className="truncate"
                    style={{ width: '100%' }} // Animasyonun boyutunu burada tanımlayın
                  >
                    Giriş Yap
                  </motion.p>
                  <CiLogin size={22} />
                </React.Fragment>
              )}
            </motion.button>
          </div>
          <div className='border-t w-80 border border-zinc-700 rounded-xl mt-3 shadow-xl' />
          <div className='text-gray-300 text-sm flex flex-row justify-center items-center gap-0.5 -mb-2.5'>
            <p>Hesabın yok mu?</p>
            <button onClick={() => navigate("/register")} className='text-green-400 hover:text-green-300 font-semibold p-1 transition-all duration-300'>
              Kaydol
            </button>
          </div>
        </form>
      </div>
                
    </motion.div>
  );
};
