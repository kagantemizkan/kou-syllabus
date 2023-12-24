import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { MdOutlineEdit } from "react-icons/md";
import { BsCalendar2Week } from "react-icons/bs";
import BlankProfilePic from "../assets/blankpp.webp"

export const Sidebar = () => {

  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-zinc-800 rounded-xl hover:border-zinc-700 hover:shadow-lg transition-all duration-300"
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-zinc-900"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
                <div className='flex flex-row items-center gap-5'>
                  <img src={BlankProfilePic} className='w-12 rounded-full' alt="Profile Picture" />
                  <span>Yavuz Selim FATİHOĞLU</span>
                </div>
                <button onClick={toggleSidebar} className="p-3 border-2 border-zinc-800 rounded-xl hover:border-zinc-700 hover:shadow-lg transition-all duration-300" aria-label="close sidebar">
                  <AiOutlineRollback />
                </button>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, to, Icon } = item
                  return (
                    <li key={title}>
                      <Link
                        onClick={toggleSidebar}
                        to={to}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                      >
                        <motion.span {...framerText(idx)}>{title}</motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-2xl" />
                        </motion.div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const items = [
  { title: 'Ana Sayfa', Icon: BiHomeSmile, to: '/' },
  { title: 'Ders Programlarım', Icon: BsCalendar2Week, to: '/my_schedule' },
  { title: 'Ders Programı Düzenle', Icon: MdOutlineEdit, to: '/edit_schedule' },
  { title: 'Ayarlar', Icon: FiSettings, to: '#' },
  { title: 'Çıkış Yap', Icon: CgClose, to: '#' },
]

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 20,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 0.75,
  },
}
