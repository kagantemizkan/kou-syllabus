import React, { useState, useEffect, useContext } from 'react';
import { Sidebar } from '../components/Sidebar';
import { AuthContext } from '../context.jsx';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { GoDotFill } from 'react-icons/go'
import { FaExclamation } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export const DersSecimi = () => {
    const { postSelectedStudentLessons } = useContext(AuthContext);

    const colorVariants = {
        fuchsia: 'text-fuchsia-400 bg-fuchsia-700/20 rounded-lg border border-fuchsia-900 hover:border-fuchsia-700 hover:shadow-lg transition-all duration-300',
        red: 'text-red-400 bg-red-700/20 rounded-lg border border-red-900 hover:border-red-700 hover:shadow-lg transition-all duration-300',
        emerald: 'text-emerald-400 bg-emerald-700/20 rounded-lg border border-emerald-900 hover:border-emerald-700 hover:shadow-lg transition-all duration-300',
        yellow: 'text-yellow-400 bg-yellow-700/20 rounded-lg border border-yellow-900 hover:border-yellow-700 hover:shadow-lg transition-all duration-300',
        orange: 'text-orange-400 bg-orange-700/20 rounded-lg border border-orange-900 hover:border-orange-700 hover:shadow-lg transition-all duration-300',
        blue: 'text-blue-400 bg-blue-700/20 rounded-lg border border-blue-900 hover:border-blue-700 hover:shadow-lg transition-all duration-300',
        amber: 'text-amber-400 bg-amber-700/20 rounded-lg border border-amber-900 hover:border-amber-700 hover:shadow-lg transition-all duration-300',
        green: 'text-green-400 bg-green-700/20 rounded-lg border border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300',
        cyan: 'text-cyan-400 bg-cyan-700/20 rounded-lg border border-cyan-900 hover:border-cyan-700 hover:shadow-lg transition-all duration-300',
        pink: 'text-pink-400 bg-pink-700/20 rounded-lg border border-pink-900 hover:border-pink-700 hover:shadow-lg transition-all duration-300',
        violet: 'text-violet-400 bg-violet-700/20 rounded-lg border border-violet-900 hover:border-violet-700 hover:shadow-lg transition-all duration-300',
        lime: 'text-lime-400 bg-lime-700/20 rounded-lg border border-lime-900 hover:border-lime-700 hover:shadow-lg transition-all duration-300',
    };



    const user = JSON.parse(localStorage.getItem('user'));
    const [dersler, setDersler] = useState([]);
    const [secilenDersler, setSecilenDersler] = useState([])

    const { studentLessons } = useContext(AuthContext);

    useEffect(() => {
        studentLessons(user.id)
            .then(result => {
                setDersler(result);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleLessonSelect = (dersID) => {

        const selectedLesson = dersler.find(ders => ders.ders_id === dersID);
        const updatedDersler = dersler.filter(ders => ders.ders_id !== dersID);

        setSecilenDersler(prevSecilenDersler => [...prevSecilenDersler, selectedLesson]);
        setDersler(updatedDersler);
    }

    const handleLessonUnselect = (dersID) => {
        // Bulunan ders
        const unselectedLesson = secilenDersler.find(ders => ders.ders_id === dersID);

        // Dersi secilenlerden kaldır
        const updatedSecilenDersler = secilenDersler.filter(ders => ders.ders_id !== dersID);

        console.log("Kaldırılacak ders ID:", dersID);
        console.log("Güncellenmiş Seçilen Dersler:", updatedSecilenDersler);

        // Dersi derslere geri ekle
        setDersler(prevDersler => [...prevDersler, unselectedLesson]);

        // Seçilen dersler state'ini güncelle
        setSecilenDersler(updatedSecilenDersler);
    }

    

    return (
        <div>
            <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
                <div className="flex items-center gap-3">
                    <Sidebar />
                    <p>Öğrenci Ders Seçimi</p>
                </div>
            </nav>
            <div className="px-5 py-2">
                <div>
                    <p className='font-semibold	text-2xl pt-7 pb-2 pl-0.5'>Seçebiliceğiniz Dersler</p>
                    {dersler.length === 0 ?
                        <p className='flex flex-row items-center gap-2 border-2 w-max p-2 mt-3 rounded-xl text-yellow-400 bg-yellow-700/20 border-yellow-900'>
                            <FaExclamation /> Seçebiliceğiniz ders kalmamıştır.
                        </p> :

                        <div className="rounded-xl my-2 overflow-hidden border-2 border-zinc-800 bg-zinc-800/20 shadow-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="border-zinc-800 border-2 border-t-0 border-l-0 p-2 w-32">Ders Seçimi</th>
                                        <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2 w-32">Ders Kodu</th>
                                        <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2 w-96">Ders Adı</th>
                                        <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2">Öğretim Görevlisi</th>
                                        <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2 w-32">Kontenjan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dersler.map((ders, index) => (
                                        <tr key={ders.ders_kodu}>
                                            <td className={`p-3.5 h-[70px] flex justify-center items-center border-zinc-800 border-2 ${index === 0 ? 'border-t-0' : ''} border-l-0 border-r-0 border-b-0`}>
                                                <button onClick={() => handleLessonSelect(ders.ders_id)}>
                                                    <IoArrowDownCircleOutline className='text-[36px]' />
                                                </button>
                                            </td>
                                            <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0 text-center'>{ders.ders_kodu}</td>
                                            <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0'>
                                                <div className={`flex items-center rounded-[10.5px] p-2 w-max ${colorVariants[ders.renk]}`}>
                                                    <GoDotFill className='mr-1 text-[12px]' />
                                                    {ders.ders_adi}
                                                </div>
                                            </td>
                                            <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0'>{ders.hoca_unvan + " " + ders.hoca_ad + " " + ders.hoca_soyad}</td>
                                            <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0 text-center'>{ders.kontenjan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }

                </div>


                <div className='mb-5'>
                    {secilenDersler.length === 0 ?
                        <p className='flex flex-row items-center gap-2 border-2 w-max p-2 mt-4 rounded-xl text-yellow-400 bg-yellow-700/20 border-yellow-900'>
                            <FaExclamation /> Lütfen ders seçiniz.
                        </p> :
                        <>
                            <p className='font-semibold	text-2xl pt-7 pb-2 pl-0.5'>Seçilen Dersler</p>

                            <div className="rounded-xl my-2 overflow-hidden border-2 border-zinc-800 bg-zinc-800/20 shadow-lg">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="border-zinc-800 border-2 border-t-0 border-l-0 p-2 w-32">Ders Seçimi</th>
                                            <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2 w-32">Ders Kodu</th>
                                            <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2 w-96">Ders Adı</th>
                                            <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2">Öğretim Görevlisi</th>
                                            <th className="border-zinc-800 border-t-0 border-r-0 border-2 p-2 w-32">Kontenjan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {secilenDersler.map((ders, index) => (
                                            <tr key={ders.ders_kodu}>
                                                <td className={`p-3.5 h-[70px] flex justify-center items-center border-zinc-800 border-2 ${index === 0 ? 'border-t-0' : ''} border-l-0 border-r-0 border-b-0`}>
                                                    <button onClick={() => handleLessonUnselect(ders.ders_id)}>
                                                        <IoArrowUpCircleOutline className='text-[36px]' />
                                                    </button>
                                                </td>
                                                <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0 text-center'>{ders.ders_kodu}</td>
                                                <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0'>
                                                    <div className={`flex items-center rounded-[10.5px] p-2 w-max ${colorVariants[ders.renk]}`}>
                                                        <GoDotFill className='mr-1 text-[12px]' />
                                                        {ders.ders_adi}
                                                    </div>
                                                </td>
                                                <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0'>{ders.hoca_unvan + " " + ders.hoca_ad + " " + ders.hoca_soyad}</td>
                                                <td className='p-3.5 border-zinc-800 border-2 border-b-0 border-r-0 text-center'>{ders.kontenjan}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={() => postSelectedStudentLessons(user.id, secilenDersler.map((lesson) => lesson.ders_id))} className='flex ml-auto flex-row items-center gap-2 border-2 w-max py-2 px-3 mt-4 rounded-xl text-green-400 bg-green-700/20 border-green-900 hover:border-green-700 hover:shadow-lg transition-all duration-300'>
                                 Onayla <FaCheck />
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};