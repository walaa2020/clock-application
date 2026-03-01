import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdMenuOpen } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";

const menuItems = [
  { icon: <FaRegClock size={30} />, label: 'Digital Clock', link: '/' },
  { icon: <CgSandClock size={30} />, label: 'Countdown', link: 'countdown' },
  { icon: <TfiAlarmClock size={30} />, label: 'Alarm', link: 'alarm' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={`hidden md:flex shadow-md h-screen flex-col duration-500 bg-[#1f293a] text-white ${open ? 'w-60' : 'w-15'
        }`}
    >

      <div className='px-4 py-2 h-20 flex justify-between items-center '>
        {open && <h2 className='text-lg font-semibold'>Clock App</h2>}

        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <ul className='flex-1 px-4'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`py-3 my-2 ${open ? "px-4" : "px-0"} hover:bg-[#45f3ff] rounded-md duration-300 cursor-pointer flex gap-3 items-center relative group`}
          >

            <Link to={item.link} className="flex items-center justify-center w-7 px-0.5 ">
              {item.icon}
            </Link>

            <Link
              to={item.link}
              className={`duration-500 whitespace-nowrap overflow-hidden ${!open ? 'w-0 opacity-0 translate-x-10' : 'w-auto opacity-100'
                }`}
            >
              {item.label}
            </Link>

            {!open && (
              <p
                className="absolute left-16 bg-white text-black text-sm shadow-md rounded-md 
                px-2 py-1 opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap"
              >
                {item.label}
              </p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}