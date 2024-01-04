import { Sidebar } from '../components/Sidebar';
import { MdOutlineEdit } from 'react-icons/md';
import WeekSchedule from '../components/WeekSchedule';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Modal from '../components/Modal';

export const Programlarım = () => {
  const [editMode, setEditMode] = useState(false);
  const [deletingClass, setDeletingClass] = useState("");

  const controls = useAnimation();

  useEffect(() => {
    // Sayfa ilk renderlandığında animasyonu başlat
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, delay: 0.1 },
    });
  }, [controls]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <Modal editMode={editMode} setEditMode={setEditMode} deletingClass={deletingClass} setDeletingClass={setDeletingClass} />

      <nav className="flex justify-between px-5 py-2 border-b-2 border-zinc-800">
        <div className="flex items-center gap-3">
          <Sidebar />
          <p>Ders Programım</p>
        </div>
        <motion.button
          onClick={toggleEditMode}
          className="flex gap-3 items-center px-4 py-2 text-lg text-zinc-200 bg-purple-700/20 rounded-xl border border-purple-900 hover:border-purple-700 hover:shadow-lg active:border-purple-500 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }} 
        >
          <p className='text-base text font-medium'>Dersleri Düzenle</p>
          <MdOutlineEdit className="text-[26px]" />
        </motion.button>
      </nav>


      <motion.div
        initial={{ opacity: 0, y: 50 }} // İlk render'da saydam ve aşağıdan gelen pozisyon
        animate={controls}
        className="flex flex-col items-center justify-center p-4"
      >
        <WeekSchedule editMode={editMode} deletingClass={deletingClass} setDeletingClass={setDeletingClass} />
      </motion.div>
    </div>
  );
};
