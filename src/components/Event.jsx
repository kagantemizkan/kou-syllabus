import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { FaRegTrashCan } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

export default function Event(props) {
    
    const colorVariants = {
        fuchsia: 'text-fuchsia-400 bg-fuchsia-700/20',
        red: 'text-red-400 bg-red-700/20',
        emerald: 'text-emerald-400 bg-emerald-700/20',
        yellow: 'text-yellow-400 bg-yellow-700/20',
        orange: 'text-orange-400 bg-orange-700/20',
        blue: 'text-blue-400 bg-blue-700/20',
        amber: 'text-amber-400 bg-amber-700/20',
        green: 'text-green-400 bg-green-700/20',
        cyan: 'text-cyan-400 bg-cyan-700/20',
        pink: 'text-pink-400 bg-pink-700/20',
        violet: 'text-violet-400 bg-violet-700/20',
        lime: 'text-lime-400 bg-lime-700/20',
    }

    if (props.eventName !== undefined && props.eventName !== null) {
        return (
            <div className="relative max-w-[195px] min-w-[165px] flex flex-col gap-1 text-zinc-200 border-2 border-zinc-800 rounded-xl hover:border-zinc-700 hover:shadow-lg transition-all duration-300">
                <div className={`flex rounded-[10.5px] p-3 ${colorVariants[props.color]}`}>
                    <div>
                        <GoDotFill className='pt-[4px] text-[16px]' />
                    </div>
                    <div className="pl-1.5 text-[15px] font-medium">{props.eventName}</div>
                </div>
                <div className={`max-w-[135px] text-[13px] font-medium text-white-100 rounded-xl pl-7 mb-1.5 mt-1.5`}>
                    {props.instructor}
                </div>
                <div className={`text-[13px] text-white-100 rounded-xl pl-7 mb-3`}>
                    <span>Sınıf: </span>{props.courseClass}
                </div>
                <AnimatePresence>
                    {props.editMode &&
                        <>
                            <motion.button
                                onClick={() => props.setDeletingClass(props.eventt)}
                                initial={{ opacity: 0, scale: 0.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="absolute bottom-2 right-2 p-2 bg-red-700/20 rounded-lg border-2 border-red-900 hover:border-red-700 hover:shadow-lg active:border-red-500 transition-all duration-300">
                                <FaRegTrashCan />
                            </motion.button>
                        </>
                    }
                </AnimatePresence>

            </div>
        )
    }
}
