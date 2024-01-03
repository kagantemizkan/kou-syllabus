// WeekSchedule.jsx
import React, { useState, useContext, useEffect } from 'react';
import Event from './Event';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../context.jsx';
import Dropdown from './Dropdown.jsx';

const WeekSchedule = (props) => {
    const [schedule, setSchedule] = useState([]);
    const [selectedYear, setSelectedYear] = useState();

    const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
    const hours = Array.from({ length: 16 }, (_, index) => 8 + index);

    const { getProgram } = useContext(AuthContext);

    useEffect(() => {
        getProgram()  // Bütün dersleri getir
            .then(result => {
                // Boş bir schedule objesi oluştur
                const emptySchedule = hours.map((hour) => {
                    return {
                        time: `${hour}:00 - ${hour + 1}:00`,
                        days: days.reduce((acc, day) => {
                            acc[day] = { events: [] };
                            return acc;
                        }, {})
                    };
                });

                // Gelen dersleri schedule'a ekleyerek güncelle
                const updatedSchedule = result
                    .filter(event => event.sinif_sene === selectedYear)
                    .reduce((acc, event) => {
                        const hourIndex = event.baslangic - 8;
                        const dayKey = event.gun;
                        acc[hourIndex].days[dayKey].events.push(event);
                        return acc;
                    }, emptySchedule);

                setSchedule(updatedSchedule);
            })
            .catch(error => {
                console.error(error);
            });
    }, [selectedYear]);

    return (
        <>
            <Dropdown setSelectedYear={setSelectedYear} />
            <div className="rounded-xl my-2 overflow-hidden border-2 border-zinc-800 bg-zinc-800/20 shadow-lg">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="p-2 max-w-0 border-zinc-800 border-2 border-t-0 border-l-0 h-14">
                                Saatler / Günler
                            </th>
                            {days.map(day => (
                                <th key={day} className="border-zinc-800 border-t-0 border-r-0 border-2 p-2">{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((row, index) => (
                            <tr key={row.time}>
                                <td className="border-zinc-800 border-2 border-l-0 border-b-0 p-1 h-16 w-32 text-center">
                                    <div>
                                        Ders {index + 1}
                                    </div>
                                    {row.time}
                                </td>
                                {days.map(day => (
                                    <td key={day} className="border-zinc-800 border-2 border-b-0 border-r-0 p-2 min-w-[165px]">
                                        <div className='flex flex-col gap-3 justify-center items-center'>
                                            <div className='flex flex-row gap-3 content-center justify-center'>
                                                {row.days[day]?.events?.map((event, eventIndex) => (
                                                    <Event
                                                        key={eventIndex}
                                                        eventName={event.ders_adi}
                                                        eventt={event}
                                                        instructor={event.hoca_unvan + " " + event.hoca_ad + " " + event.hoca_soyad}
                                                        courseClass={event.sinif_kodu}
                                                        color={event.renk}

                                                        editMode={props.editMode}

                                                        deletingClass={props.deletingClass}
                                                        setDeletingClass={props.setDeletingClass}
                                                    />
                                                ))}
                                            </div>
                                            <AnimatePresence>
                                                {props.editMode === true && (
                                                    <motion.button
                                                        initial={{ opacity: 0, scale: 0.4 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.6 }}
                                                        onClick={() => setEditMode(!editMode)}
                                                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                                                        className='flex justify-center gap-3 max-w-[180px] items-center px-4 py-2 text-lg text-zinc-200 bg-antiqueSteel-700/20 rounded-xl border-2 border-antiqueSteel-900 hover:border-antiqueSteel-700 hover:shadow-lg transition-all duration-300'>
                                                        <p className='text-base'>Ders Ekle</p>
                                                    </motion.button>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default WeekSchedule;