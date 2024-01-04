// Dropdown.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ setSelectedYear, dropdownName, buttons, selectedYear, weekSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  const arrowVariants = {
    open: { rotate: -180 },
    closed: { rotate: 0 },
  };

  const handleYearSelection = (year) => {
    console.log(year)
    setSelectedYear(year);
    setIsOpen(false);
  };


  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center gap-3.5 py-1.5 px-3 justify-between w-full border-2 dark:border-zinc-800 border-gray-200 hover:border-gray-400 rounded-md dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-300"
      >
        {weekSchedule ?
          <p>{selectedYear ? <p>{selectedYear}. Yıl Dersleri</p> : dropdownName}</p> : <p>{selectedYear ? <p>{selectedYear}</p> : dropdownName}</p>
        }
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={arrowVariants}
        >
          <FaAngleDown className="text-xl" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute z-50 w-full mt-1 rounded-md border-2 bg-zinc-900 dark:border-zinc-800 border-gray-200 shadow-md hover:border-gray-400 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-300"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleYearSelection(button.year)}
                  className={button.className}
                  role="menuitem"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;