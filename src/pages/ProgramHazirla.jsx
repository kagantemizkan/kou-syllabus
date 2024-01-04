import React, { useEffect, useState, useContext } from 'react';
import { Sidebar } from '../components/Sidebar';
import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline } from "react-icons/io5";
import { AuthContext } from '../context.jsx';

export const ProgramHazirla = () => {

  const { createProgram } = useContext(AuthContext);

  return (
    <div className='h-[85vh]'>
      <nav className="flex items-center justify-between px-5 py-2 border-b-2 dark:border-zinc-800 border-gray-200">
        <div className="flex items-center gap-3">
          <Sidebar />
          <p>Program Hazırla</p>
        </div>
      </nav>

      <div className='flex justify-center items-center h-full'>
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-yellow-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
          <button onClick={() => createProgram()} class="relative px-6 py-4 border-zinc-900 hover:border-green-700 bg-[#172D22] rounded-lg leading-none flex items-center">
              <span class="text-gray-100">Programı Hazırla</span>
          </button>
        </div>
      </div>
    </div>
  );
};