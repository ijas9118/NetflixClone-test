import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  Pencil,
  Search,
  SendToBack,
  UserRound,
} from "lucide-react";
import { logout } from "../firebase";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 flex justify-between px-3 md:px-14 py-2 md:py-4 duration-500 ${
        isScrolled ? "bg-[#141414]" : "bg-transparent"
      }`}
    >
      <div className='flex items-center gap-4 md:gap-10'>
        <div>
          <img
            src={logo}
            alt='Netflix-logo'
            className='w-12 md:w-20 lg:w-[88px]'
          />
        </div>
        <ul className='hidden lg:flex list-none gap-4 md:gap-6 text-xs md:text-sm lg:text-base items-center'>
          <li className='font-bold cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out text-sm'>
            Home
          </li>
          <li className='cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out text-sm'>
            TV Shows
          </li>
          <li className='cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out text-sm'>
            Movies
          </li>
          <li className='cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out text-sm'>
            News & Popular
          </li>
          <li className='cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out text-sm'>
            My List
          </li>
          <li className='cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out text-sm'>
            Browse by Languages
          </li>
        </ul>
      </div>
      <div className='flex gap-3 md:gap-5 items-center'>
        <Search
          size={22}
          className='cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out'
        />
        <p className='cursor-pointer hidden lg:block text-xs md:text-sm  hover:text-gray-300 transition duration-200 ease-in-out'>
          Children
        </p>
        <Bell
          size={22}
          className='cursor-pointer  hover:text-gray-300 transition duration-200 ease-in-out'
        />
        <div className='flex gap-1 items-center relative group '>
          <img src={user} alt='Avatar' className='w-8 h-8' />
          <ChevronDown
            size={20}
            className='cursor-pointer group-hover:rotate-180 transition duration-200 ease-in-out'
          />
          <div className='absolute right-0 top-full w-48 bg-black text-white rounded-sm shadow-lg p-4 hidden group-hover:block z-10'>
            <ul className='flex flex-col gap-3'>
              <li className='hover:text-gray-300 hover:underline cursor-pointer flex items-center gap-3 transition duration-200 ease-in-out text-sm'>
                <Pencil size={20} />
                Manage Profile
              </li>
              <li className='hover:text-gray-300 hover:underline cursor-pointer flex items-center gap-3 transition duration-200 ease-in-out text-sm'>
                <SendToBack size={20} />
                Transfer Profile
              </li>
              <li className='hover:text-gray-300 hover:underline cursor-pointer flex items-center gap-3 transition duration-200 ease-in-out text-sm'>
                <UserRound size={20} />
                Account
              </li>
              <li className='hover:text-gray-300 hover:underline cursor-pointer flex items-center gap-3 transition duration-200 ease-in-out text-sm'>
                <CircleHelp size={20} />
                Help Centre
              </li>
              <hr className='border-gray-600' />
              <li
                className='hover:text-gray-300 hover:underline cursor-pointer transition duration-200 ease-in-out text-sm'
                onClick={() => logout()}
              >
                Sign out of Netflix
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
