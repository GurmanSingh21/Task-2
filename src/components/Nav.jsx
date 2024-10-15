import { useState } from "react";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import close from "../assets/close.svg";
import logo from '../assets/logo.png';
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const Nav = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    return (
    <nav className="w-full flex pb-2 justify-between items-center px-10">
        <img src={logo} alt="logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-body font-normal cursor-pointer ${
            active === nav.title ? "text-secondary" : "text-textPrimary"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            >
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
        ))}
        </ul>
        <div className="sm:flex sm:flex-1 justify-end items-center space-x-4 hidden">
            <IoSearchOutline className="text-2xl hover:text-secondary cursor-pointer"/>
            
            <div className="relative">
                <IoBagOutline className="text-2xl"/>
                <span className="absolute top-0 right-0 h-4 w-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full cursor-pointer">
                    8
                </span>
            </div>
            <a href="#footer">
            <button className="flex items-center bg-secondary text-white font-body px-4 py-2 rounded-full  hover:bg-green-600 transition duration-300 ">
                <PiPhoneCall className="h-5 w-5 mr-2" /> {/* React Icon with margin */}
                Contact
            </button>
            </a>
        </div>
        <div className="sm:hidden flex justify-end items-center mr-4 space-x-3">
            <IoSearchOutline className="text-2xl hover:text-secondary cursor-pointer" />

            <div className="relative">
                <IoBagOutline className="text-2xl" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">
                    8
                </span>
            </div>

            <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
            />

            <div
                className={`absolute top-20 right-0 my-2 min-w-[140px] rounded-xl sidebar transition-all duration-300 ease-in-out ${
                    toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                {/* Background to ensure it's visible when appearing */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="list-none flex justify-end items-center flex-1 flex-col">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-body font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? "text-secondary" : "text-textPrimary"
                                } mb-4 justify-items-center`}
                                onClick={() => {
                                    setActive(nav.title);
                                    setToggle(false); // Close the menu after selection
                                }}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        <li>
                            <button className="flex items-center bg-secondary text-white font-body px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                                <PiPhoneCall className="h-5 w-5 mr-2" />
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Nav