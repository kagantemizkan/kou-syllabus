import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { RiMessage3Line } from "react-icons/ri";
import { HiPencilSquare } from "react-icons/hi2";

import KOULogo from '../assets/kouLogo.webp'
import KOUResim1 from '../assets/kou_resim1.jpg'
import KOUResim2 from '../assets/kou_resim2.jpg'
import KOUResim3 from '../assets/kou_resim3.jpg'
import KOUResim4 from '../assets/kou_resim4.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Event from '../components/Event';

export const Home = () => {
  const images = [KOUResim1, KOUResim4, KOUResim2, KOUResim3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
        <div className="flex items-center gap-3">
          <Sidebar />
          <p>Ana Sayfa</p>
        </div>
        <div className='flex gap-3 items-center px-4 py-2 text-lg text-zinc-200 bg-green-700/20 rounded-xl border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300'>
          <img src={KOULogo} className='w-9' alt="Kocaeli Universitesi Logo" />
          <p>Kocaeli Üniversitesi</p>
        </div>
      </nav>
      {/* HOME PAGE START */}
      <div className="p-7 flex flex-row gap-10">


        {/* SOL TARAF */}
        <div className=' flex flex-col gap-6 w-[426px]'>
          <div className='flex rounded-[14px] max-h-60 border-2 border-zinc-800 hover:border-zinc-600 hover:shadow-lg transition-all duration-300'>
            <img className='rounded-xl' src={images[currentImageIndex]} alt="" />
          </div>
          <div className='flex flex-row gap-4'>
            <div className='pb-3 border-2 border-zinc-800 rounded-md w-52 flex flex-col gap-3 items-center hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
              <div className='px-4 py-2 min-w-full flex justify-center text-xl text-blue-200 bg-blue-800/20 rounded-t-[5px] font-medium'>Mesajlar</div>
              <div className='px-3 py-2 flex justify-between items-center text-green-300 bg-green-700/20 min-w-[164px] rounded-[4px] border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300'>
                Mesaj Gönder
                <HiPencilSquare className='text-2xl' />
              </div>
              <div className='px-3 py-2 flex justify-between items-center text-blue-300 bg-blue-700/20 min-w-[164px] rounded-[4px] border border-blue-900 hover:border-blue-700 hover:shadow-lg transition-all duration-300'>
                Mesajlarım
                <RiMessage3Line className='text-2xl' />
              </div>
            </div>

            
            <div className='pb-3 border-2 border-zinc-800 rounded-md w-52 flex flex-col gap-3 items-center hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
              <div className='px-4 py-2 min-w-full flex justify-center text-xl text-blue-200 bg-blue-800/20 rounded-t-[5px] font-medium'>Ders İşlemleri</div>
              <div className='px-3 py-2 flex justify-between items-center text-pear-300 bg-pear-700/20 min-w-[164px] rounded-[4px] border border-pear-900 hover:border-pear-700 hover:shadow-lg transition-all duration-300'>
                Ders Düzenle
                <HiPencilSquare className='text-2xl' />
              </div>
              <div className='px-3 py-2 flex justify-between items-center text-antiqueSteel-300 bg-antiqueSteel-700/20 min-w-[164px] rounded-[4px] border border-antiqueSteel-900 hover:border-antiqueSteel-700 hover:shadow-lg transition-all duration-300'>
                Ders Programı
                <RiMessage3Line className='text-2xl' />
              </div>
            </div>
          </div>

          <div className='pb-3 border-2 border-zinc-800 rounded-md w-full flex flex-col gap-3 items-center hover:border-zinc-700 hover:shadow-lg transition-all duration-300'>
            <div className='px-4 py-2 min-w-full flex justify-center text-xl text-blue-200 bg-blue-800/20 rounded-t-[5px] font-medium'>Sosyal Medya</div>
            <div className="flex flex-row gap-6 items-center">
              <a href="https://www.facebook.com/kou92official" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-3xl hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com/kou92official/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300" />
              </a>

              <a href="https://twitter.com/kou92official" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-[28px] hover:text-gray-100/70 transition-colors duration-300" />
              </a>
              <a href="https://www.youtube.com/c/kocaeliüniversitesi" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl hover:text-red-600 transition-colors duration-300" />              
              </a>
            </div>
          </div>
        </div>

        {/* ORTA TARAF */}
        <div className=' flex flex-col gap-6'>
          <div className='font-semibold	text-2xl'>
            Yarınki Derslerim
          </div>
          <div className='grid grid-cols-3 gap-3'>
            <Event
              key={1}
              eventName={"Yazılım Geliştirme Laboratuvarı-I"}
              instructor={"Öğr. Gör. Yavuz Selim FATİHOĞLU"}
              courseClass={"Tanımsız"}
              color={"fuchsia"}
            />
            <Event
              key={1}
              eventName={"React-Native Framework ile Mobil Programlama"}
              instructor={"Öğr. Gör. Yavuz Selim FATİHOĞLU"}
              courseClass={"Tanımsız"}
              color={"red"}
            />
            <Event
              key={1}
              eventName={"Görsel Programlama"}
              instructor={"Öğr. Gör. Yavuz Selim FATİHOĞLU"}
              courseClass={"Tanımsız"}
              color={"emerald"}
            />
            <Event
              key={1}
              eventName={"Sanal Gerçeklik"}
              instructor={"Öğr. Gör. Yavuz Selim FATİHOĞLU"}
              courseClass={"Tanımsız"}
              color={"yellow"}
            />
          </div>
        </div>
        <div className=' flex flex-col gap-6'>
          <div className='font-semibold	text-2xl'>
            Duyurular
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-3'>

          </div>
        </div>

      </div>
    </div>
  );
};
