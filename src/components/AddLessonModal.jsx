import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from './Dropdown';
import { AuthContext } from '../context.jsx';

export default function AddLessonModal(props) {

    const user = JSON.parse(localStorage.getItem("user")) 

    const [selectedYear, setSelectedYear] = useState();
    const [lessonInfo, setLessonInfo] = useState({
        lessonName: '',
        lessonID: '',
        kontenjan: '',
    });

    const buttonsClassYear = [
        { label: '1', year: 1, className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
        { label: '2', year: 2, className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
        { label: '3', year: 3, className: 'w-full px-4 py-2 border-b-2 dark:border-zinc-800 hover:text-zinc-50 text-left' },
        { label: '4', year: 4, className: 'w-full px-4 py-2 hover:text-zinc-50 text-left' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLessonInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const { addLesson } = useContext(AuthContext);

    return (
        <AnimatePresence>
            {props.addLessonToggle === true && (
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50 bg-black/40'
                    initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
                    animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    exit={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                    <div className='relative p-3 gap-4 border-2 border-zinc-800 bg-zinc-900 rounded-lg flex flex-col hover:shadow-lg transition-all duration-300'>
                        <p className='font-semibold text-xl mb-1'>Yeni Ders Ekle</p>
                        <input
                            name="lessonName"
                            value={lessonInfo.lessonName}
                            onChange={handleInputChange}
                            placeholder="Ders Adı"
                            className='font-sans w-72 text-sm font-normal leading-6 p-2 rounded-md text-gray-300 border-zinc-700 bg-zinc-800 border shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300'
                        />
                        <input
                            name="lessonID"
                            value={lessonInfo.lessonID}
                            onChange={handleInputChange}
                            placeholder="Ders Kodu"
                            className='font-sans w-72 text-sm font-normal leading-6 p-2 rounded-md text-gray-300 border-zinc-700 bg-zinc-800 border shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300'
                        />
                        <input
                            name="kontenjan"
                            value={lessonInfo.kontenjan}
                            onChange={handleInputChange}
                            placeholder="Kontenjan"
                            className='font-sans w-72 text-sm font-normal leading-6 p-2 rounded-md text-gray-300 border-zinc-700 bg-zinc-800 border shadow-sm hover:border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-zinc-500 hover:shadow-lg transition-all duration-300'
                            type='number'
                        />
                        <Dropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear} buttons={buttonsClassYear} dropdownName="Sene" />
                        <button onClick={() => addLesson(
                            user.id,
                            lessonInfo.lessonName,
                            lessonInfo.lessonID,
                            selectedYear,
                            lessonInfo.kontenjan
                        )} className="px-4 py-2 text-green-400 bg-green-700/20 rounded-md border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300">Dersi Ekle</button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
