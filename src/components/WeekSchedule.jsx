import React, { useState } from 'react';
import Event from './Event';
import { motion, AnimatePresence } from 'framer-motion';

const WeekSchedule = (props) => {
    const [schedule, setSchedule] = useState([]);

    const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
    const hours = Array.from({ length: 16 }, (_, index) => 8 + index);

    const generateSchedule = () => {

        const newSchedule = hours.map((hour, hourIndex) => {
            return {
                time: `${hour}:00 - ${hour + 1}:00`,
                days: days.map(day => ({
                    day: day,
                    events: [] // Birden fazla etkinlik için dizi oluşturuldu.
                }))
            };
        });

        const mondayIndex = days.indexOf('Pazartesi');
        const tuesdayIndex = days.indexOf('Salı');
        const wednesdayIndex = days.indexOf('Çarşamba');
        const thursdayIndex = days.indexOf('Perşembe');
        const fridayIndex = days.indexOf('Cuma');

        // PAZARTESİ
        newSchedule[1].days[mondayIndex].events.push({
            name: 'Diferansiyel Denklemler',
            instructor: 'Doç. Dr. Vildan ÇETKİN',
            courseClass: '1044',
            color: 'orange',
        });
        newSchedule[1].days[mondayIndex].events.push({
            name: 'Web Tasarımı',
            instructor: 'Dr. Öğr. Üyesi Önder YAKUT',
            courseClass: '1036',
            color: 'fuchsia',
        });
        //
        newSchedule[2].days[mondayIndex].events.push({
            name: 'Diferansiyel Denklemler',
            instructor: 'Doç. Dr. Vildan ÇETKİN',
            courseClass: '1044',
            color: 'orange',
        });
        newSchedule[2].days[mondayIndex].events.push({
            name: 'Web Tasarımı',
            instructor: 'Dr. Öğr. Üyesi Önder YAKUT',
            courseClass: '1036',
            color: 'fuchsia',
        });
        //
        newSchedule[3].days[mondayIndex].events.push({
            name: 'Diferansiyel Denklemler',
            instructor: 'Doç. Dr. Vildan ÇETKİN',
            courseClass: '1044',
            color: 'orange',
        });
        newSchedule[3].days[mondayIndex].events.push({
            name: 'Web Tasarımı',
            instructor: 'Dr. Öğr. Üyesi Önder YAKUT',
            courseClass: '1036',
            color: 'fuchsia',
        });
        //
        newSchedule[4].days[mondayIndex].events.push({
            name: 'Diferansiyel Denklemler',
            instructor: 'Doç. Dr. Vildan ÇETKİN',
            courseClass: '1044',
            color: 'orange',
        });
        newSchedule[4].days[mondayIndex].events.push({
            name: 'Web Tasarımı',
            instructor: 'Dr. Öğr. Üyesi Önder YAKUT',
            courseClass: '1036',
            color: 'fuchsia',
        });

        // SALI
        newSchedule[1].days[tuesdayIndex].events.push({
            name: 'Elektrik Elektronik Devreler',
            instructor: 'Doç. Dr. Mustafa Hikmet Bilgehan UÇAR',
            courseClass: '1040',
            color: 'red',
        });
        newSchedule[1].days[tuesdayIndex].events.push({
            name: 'Elektrik Elektronik Devreler',
            instructor: 'Doç. Dr. Mustafa Hikmet Bilgehan UÇAR',
            courseClass: '1040',
            color: 'red',
        });
        newSchedule[2].days[tuesdayIndex].events.push({
            name: 'Elektrik Elektronik Devreler',
            instructor: 'Doç. Dr. Mustafa Hikmet Bilgehan UÇAR',
            courseClass: '1040',
            color: 'red',
        });
        newSchedule[2].days[tuesdayIndex].events.push({
            name: 'Ayrık Matematik',
            instructor: 'Doç. Dr. Süleyman EKEN',
            courseClass: '1041',
            color: 'blue',
        });
        newSchedule[3].days[tuesdayIndex].events.push({
            name: 'Elektrik Elektronik Devreler',
            instructor: 'Doç. Dr. Mustafa Hikmet Bilgehan UÇAR',
            courseClass: 'Z025',
            color: 'red',
        });
        newSchedule[3].days[tuesdayIndex].events.push({
            name: 'Ayrık Matematik',
            instructor: 'Doç. Dr. Süleyman EKEN',
            courseClass: '1041',
            color: 'blue',
        });
        newSchedule[4].days[tuesdayIndex].events.push({
            name: 'Elektrik Elektronik Devreler',
            instructor: 'Doç. Dr. Mustafa Hikmet Bilgehan UÇAR',
            courseClass: 'Z025',
            color: 'red',
        });
        newSchedule[4].days[tuesdayIndex].events.push({
            name: 'Ayrık Matematik',
            instructor: 'Doç. Dr. Süleyman EKEN',
            courseClass: '1041',
            color: 'blue',
        });
        newSchedule[5].days[tuesdayIndex].events.push({
            name: 'Elektrik Elektronik Devreler',
            instructor: 'Doç. Dr. Mustafa Hikmet Bilgehan UÇAR',
            courseClass: 'Z025',
            color: 'red',
        });
        newSchedule[6].days[tuesdayIndex].events.push({
            name: 'Nesne Yönelimli Programlama',
            instructor: 'Doç. Dr. Zeynep Hilal KİLİMCİ',
            courseClass: '1040',
            color: 'emerald',
        });
        newSchedule[6].days[tuesdayIndex].events.push({
            name: 'Bilgisayar Mimari ve Organizasyonu',
            instructor: 'Doç. Dr. Halil YİĞİT',
            courseClass: '1041',
            color: 'yellow',
        });
        newSchedule[7].days[tuesdayIndex].events.push({
            name: 'Nesne Yönelimli Programlama',
            instructor: 'Doç. Dr. Zeynep Hilal KİLİMCİ',
            courseClass: '1040',
            color: 'emerald',
        });
        newSchedule[7].days[tuesdayIndex].events.push({
            name: 'Bilgisayar Mimari ve Organizasyonu',
            instructor: 'Doç. Dr. Halil YİĞİT',
            courseClass: '1041',
            color: 'yellow',
        });
        newSchedule[8].days[tuesdayIndex].events.push({
            name: 'Nesne Yönelimli Programlama',
            instructor: 'Doç. Dr. Zeynep Hilal KİLİMCİ',
            courseClass: '1040',
            color: 'emerald',
        });
        newSchedule[8].days[tuesdayIndex].events.push({
            name: 'Bilgisayar Mimari ve Organizasyonu',
            instructor: 'Doç. Dr. Halil YİĞİT',
            courseClass: '1041',
            color: 'yellow',
        });

        // CARSAMBA
        newSchedule[4].days[wednesdayIndex].events.push({
            name: 'Bilişim Sistemleri Analizi ve Tasarımı',
            instructor: 'Öğr. Gör. Alper METİN',
            courseClass: '1041',
            color: 'amber',
        });
        newSchedule[5].days[wednesdayIndex].events.push({
            name: 'Bilişim Sistemleri Analizi ve Tasarımı',
            instructor: 'Öğr. Gör. Alper METİN',
            courseClass: '1041',
            color: 'amber',
        });
        newSchedule[6].days[wednesdayIndex].events.push({
            name: 'Bilişim Sistemleri Analizi ve Tasarımı',
            instructor: 'Öğr. Gör. Alper METİN',
            courseClass: '1041',
            color: 'amber',
        });
        newSchedule[7].days[wednesdayIndex].events.push({
            name: 'Stres Yönetimi',
            instructor: 'Öğr. Gör. İlknur OVALI URAN',
            courseClass: '103',
            color: 'green',
        });
        newSchedule[8].days[wednesdayIndex].events.push({
            name: 'Stres Yönetimi',
            instructor: 'Öğr. Gör. İlknur OVALI URAN',
            courseClass: '103',
            color: 'green',
        });

        //CUMA
        newSchedule[0].days[fridayIndex].events.push({
            name: 'Staj - I',
            instructor: 'Doç. Dr. Zeynep Hilal KİLİMCİ',
            courseClass: 'Tanımsız',
            color: 'cyan',
        });
        newSchedule[1].days[fridayIndex].events.push({
            name: 'Staj - I',
            instructor: 'Doç. Dr. Zeynep Hilal KİLİMCİ',
            courseClass: 'Tanımsız',
            color: 'cyan',
        });
        newSchedule[5].days[fridayIndex].events.push({
            name: 'Yazılım Geliştirme Laboratuvarı-I',
            instructor: 'Öğr. Gör. Yavuz Selim FATİHOĞLU',
            courseClass: 'Tanımsız',
            color: 'pink',
        });
        newSchedule[6].days[fridayIndex].events.push({
            name: 'Yazılım Geliştirme Laboratuvarı-I',
            instructor: 'Öğr. Gör. Yavuz Selim FATİHOĞLU',
            courseClass: 'Tanımsız',
            color: 'pink',
        });
        newSchedule[7].days[fridayIndex].events.push({
            name: 'Yönetim ve Organizasyon',
            instructor: 'Prof. Dr. Ceylan Gazi UÇKUN',
            courseClass: '1036',
            color: 'violet',
        });
        newSchedule[8].days[fridayIndex].events.push({
            name: 'Yönetim ve Organizasyon',
            instructor: 'Prof. Dr. Ceylan Gazi UÇKUN',
            courseClass: '1036',
            color: 'violet',
        });


        setSchedule(newSchedule);
    };

    React.useEffect(() => {
        generateSchedule();
    }, []);

    return (

        <div className="rounded-xl my-5 overflow-hidden border-2 border-zinc-800 bg-zinc-800/20 shadow-lg">
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
                            {row.days.map(day => (
                                <td key={day.day} className="border-zinc-800 border-2 border-b-0 border-r-0 p-2 min-w-[165px]">
                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <div className='flex flex-row gap-3 content-center justify-center'>
                                            {day.events.map((event, eventIndex) => (
                                                <Event
                                                    key={eventIndex}
                                                    eventName={event.name}
                                                    instructor={event.instructor}
                                                    courseClass={event.courseClass}
                                                    color={event.color}
                                                    
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
                                                    transition= {{ duration: 0.2, ease: 'easeInOut' }}
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
    );
};

export default WeekSchedule;
