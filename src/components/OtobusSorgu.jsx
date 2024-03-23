import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown'
import DateSelect from './DateSelect';
import { FaSearch } from "react-icons/fa";
import bigBusImage from '../assets/bigBusImage.jpg'

export default function OtobusSorgu() {

    const [selectedNereden, setSelectedNereden] = useState("İzmir")
    const [selectedNereye, setSelectedNereye] = useState("İstanbul")
    const [selectedDate, setSelectedDate] = useState("Bugün")

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const nereden = [
        { label: 'İstanbul', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'İzmir', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Edirne', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Ankara', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Manisa', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Adana', className: 'w-full px-4 py-2 hover:text-zinc-800 text-left' },
    ];

    const nereye = [
        { label: 'İstanbul', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'İzmir', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Edirne', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Ankara', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Manisa', className: 'w-full px-4 py-2 border-b-2  hover:text-zinc-800 text-left' },
        { label: 'Adana', className: 'w-full px-4 py-2 hover:text-zinc-800 text-left' },
    ];


    return (
        <div className='bg-white flex border-2 rounded-3xl shadow-sm flex-row items-center justify-between mx-48 py-6'>
            <div className='mx-8 flex flex-row gap-6 w-full'>
                <div className='flex flex-col'>
                    <Dropdown topText="Nereden" buttons={nereden} setSelected={setSelectedNereden} selected={selectedNereden} />
                </div>
                <div className='flex flex-col'>
                    <Dropdown topText="Nereye" buttons={nereye} setSelected={setSelectedNereye} selected={selectedNereye} />
                </div>
                <div className='flex flex-row gap-6'>
                    <DateSelect />
                    <div className='flex flex-col justify-center gap-1'>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="today-radio"
                                value="today"
                                name="date-radio"
                                checked={selectedDate === 'today'}
                                onChange={handleDateChange}
                            />
                            <label
                                htmlFor="today-radio"
                                className="ms-2 text-base font-semibold text-gray-900 mb-1"
                            >
                                Bugün
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="tomorrow-radio"
                                value="tomorrow"
                                name="date-radio"
                                checked={selectedDate === 'tomorrow'}
                                onChange={handleDateChange}
                            />
                            <label
                                htmlFor="tomorrow-radio"
                                className="ms-2 text-base font-semibold text-gray-900 mb-1"
                            >
                                Yarın
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    className="flex flex-row justify-center items-center gap-3 bg-[#a2080d] hover:bg-[#91070b] active:bg-[#ab2025] w-full text-xl font-semibold text-white py-2 px-4 rounded-2xl transition-all duration-300`}"
                >
                    Otobüs Ara <FaSearch />
                </button>
            </div>
        </div>
    )
}
