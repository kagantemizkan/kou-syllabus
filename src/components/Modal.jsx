import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function FullScreenModal(props) {

    return (
        <AnimatePresence>

            {props.editMode && props.deletingClass && (

                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50 bg-black/40'
                    initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
                    animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    exit={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                    <div className='relative border-2 border-zinc-800 bg-zinc-900 rounded-lg flex flex-col hover:shadow-lg transition-all duration-300'>
                        <p className='py-4 px-6 border-b-2 border-zinc-800'>
                            <span className='font-bold'>{props.deletingClass} </span>dersini silmek istediğinizden emin misiniz?
                        </p>
                        <div className='flex flex-col gap-1.5 pt-3 pb-[58px] px-5'>
                            <p>
                                Öğretim Görevlisi: Doç. Dr. Vildan ÇETKİN
                            </p>
                            <p>
                                Sınıf: 1044
                            </p>
                            <p>
                                Saat: 9.00 - 10.00
                            </p>
                        </div>
                        <div className='absolute bottom-3 right-3 flex gap-3'>
                            <button onClick={() => { props.setDeletingClass(""); }} className="px-4 py-1.5 min-w-[80px] text-red-400 bg-red-700/20 rounded-md border border-red-900 hover:border-red-700 hover:shadow-lg transition-all duration-300">Hayır</button>
                            <button className="px-4 py-1.5 min-w-[80px] text-green-400 bg-green-700/20 rounded-md border border-green-900 hover:green-red-700 hover:shadow-lg transition-all duration-300">Evet</button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    );
}
