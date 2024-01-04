import React, { useState, useContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import KOULogo from '../assets/kouLogo.webp';
import Lottie from 'lottie-react';
import { IoChevronBackOutline } from "react-icons/io5";
import LoadingLottie from '../assets/loadingRed.json';
import { TiUserAddOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context.jsx';
import { motion, useAnimation } from 'framer-motion';
import Dropdown from '../components/Dropdown.jsx';

export const Register = () => {
  const navigate = useNavigate();
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const [userType, setUserType] = useState(); 
  const [hocaUnvan, setHocaUnvan] = useState(); 

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);


  const [user, setUser] = useState({
    userType: "",
    email: "",
    password: "",
    ad: "",
    soyad: "",
    unvan: "",
  });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    if (userLocalStorage && userLocalStorage.ad !== null && userLocalStorage.ad !== undefined) {
      navigate('/');
      console.log('var');
    } else {
      console.log('yok');
      return;
    }
  };

  const { register, login } = useContext(AuthContext);

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
    const enteredName = name.trim();
    const enteredSurname = surname.trim();
  
    if (!enteredEmail || !enteredPassword || !enteredName || !enteredSurname) {
      setEmailError(!enteredEmail);
      setPasswordError(!enteredPassword);
      setNameError(!enteredName);
      setSurnameError(!enteredSurname);
  
      showToastError('Lütfen gerekli yerleri doldurun.');
      setIsLoading(false);
      return;
    }
  
    setEmailError(false);
    setPasswordError(false);
    setNameError(false);
    setSurnameError(false);
  
    const newUser = {
      userType: userType,
      email: enteredEmail,
      password: enteredPassword,
      ad: enteredName,
      soyad: enteredSurname,
      unvan: hocaUnvan, 
    };
    
    const registerResult = await register(newUser);
  
    if (registerResult === 'Kullanıcı bulunamadı' || registerResult === 'Parola hatası') {
      showToastError(registerResult + '.');
      setIsLoading(false);
      return;
    }
  
    const loginResult = await login({ email: enteredEmail, password: enteredPassword });
  
    if (loginResult === 'Kullanıcı bulunamadı' || loginResult === 'Parola hatası') {
      showToastError(loginResult + '.');
      setIsLoading(false);
      return;
    }
  
    setIsLoading(false);
    showToastSucces('Giriş başarılı!');
    navigate('/');
  };
  
  
  

  const pageAnimation = useAnimation();

  useEffect(() => {
    pageAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.45 } });
  }, [pageAnimation]);

  const userTypeButtons = [
    { label: 'Öğretim Görevlisi', year: "Öğretim Görevlisi", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Öğrenci', year: "Öğrenci", className: 'w-full px-4 py-2 hover:text-zinc-50 text-left' },
  ];


  const hocaUnvanButtons = [
    { label: 'Doç. Dr.', year: "Doç. Dr.", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Yrd. Doç. Dr.', year: "Yrd. Doç. Dr.", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Öğr. Gör.', year: "Öğr. Gör.", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Dr.', year: "Dr.", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Prof.', year: "Prof.", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Arş. Gör.', year: "Arş. Gör.", className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
    { label: 'Uzman', year: "Uzman", className: 'w-full px-4 py-2 hover:text-zinc-50 text-left' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0.1, y: -40 }}
      animate={pageAnimation}
      className="flex h-screen items-center justify-center"
    >
      <Toaster />
      <div className='flex relative flex-col items-center border-2 border-zinc-800 rounded-xl px-6 py-8 shadow-lg bg-zinc-800/20 hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>

        <button onClick={() => navigate("/login")} className='absolute flex flex-row items-center left-2 top-2.5 border-2 border-zinc-800 rounded-lg hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
          <IoChevronBackOutline size={28} />
          <p className='py-2 pr-2.5 pl-0.5'>Giriş Yap</p>
        </button>

        <img src={KOULogo} className='w-32 mb-8' alt="Kocaeli Universitesi Logo" />

        <h2 className='text-2xl font-semibold mb-10 text-center w-72'>Kocaeli Üniversitesi Syllbus'a Kayıt Ol</h2>

        <div className='flex flex-col gap-3 items-center'>

          <div className='flex flex-row gap-3 max-w-[320px]'>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ad"
              className={`w-[154px] font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 border ${emailError ? 'border-red-500' : 'border-zinc-700'
                } shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
              type="text"
            />
            <input
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Soyad"
              className={`w-[154px] font-sans text-sm font-normal leading-6 p-2 rounded-md text-gray-300 bg-zinc-800 border ${passwordError ? 'border-red-500' : 'border-zinc-700'
                } shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300`}
              type="text"
            />
          </div>
          <Dropdown register={true} selectedYear={userType} setSelectedYear={setUserType} buttons={userTypeButtons} dropdownName="Kullanıcı Türü" />
          { userType === "Öğretim Görevlisi" && <Dropdown register={true} selectedYear={hocaUnvan} setSelectedYear={setHocaUnvan} buttons={hocaUnvanButtons} dropdownName="Kullanıcı Türü" />}
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
            <motion.button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className={`gap-2 ${isLoading == null ? null : isLoading ? 'animation1' : 'animation2'} h-[41px] w-[132px] flex items-center px-4 py-2 text-orange-400 bg-orange-700/20 rounded-md border border-orange-900 hover:border-orange-700 hover:shadow-lg transition-all duration-300`}
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
                    Kayıt Ol
                  </motion.p>
                  <TiUserAddOutline size={28} />
                </React.Fragment>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
