import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgSandClock } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
const menuItems = [
  { icon: <FaRegClock size={24} />, label: 'Digital Clock', link: '/' },
  { icon: <CgSandClock size={24} />, label: 'Countdown', link: 'countdown' },
  { icon: <TfiAlarmClock size={24} />, label: 'Alarm', link: 'alarm' },
];

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-1 fixed top-4 left-4 z-50 bg-[#1f293a] text-white  rounded-lg shadow-lg"
      >
        <MdMenuOpen size={28} />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/50 z-40 duration-300  ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />


      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#1f293a] text-white z-50 
        transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        <div className="flex justify-between p-4">
          <h2 className='text-lg font-semibold'>Clock App</h2>
          <FiX onClick={() => setOpen(false)} className="text-xl" />

        </div>


        <ul className="px-4 pt-4">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-3 px-3 rounded-md hover:bg-[#45f3ff] duration-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}