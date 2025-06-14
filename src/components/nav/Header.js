import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  let [togglemenu, settogglemenu] = useState(false);

  return (
    <header className=" relative">



      <div className="flex justify-between px-5 py-7 w-full bg-[#111418] h-[50px] items-center z-50 absolute ">

        <p className="font-medium text-[20px] text-white hover:text-white">Bavanagaran.R</p>


        <nav className="hidden sm:block z-50">
          <ul className="flex text-white gap-2">
            <li className=" h-full rounded px-1 hover:text-[#F97316] "><a href="#home">Home</a></li>
            <li className=" h-full rounded px-1 hover:text-[#F97316] "><a href="#about">About</a></li>
            <li className=" h-full rounded px-1 hover:text-[#F97316] "><a href="#project">Project</a></li>
            <li className=" h-full rounded px-1 hover:text-[#F97316] "><a href="#resume">Resume</a></li>
            <li className=" h-full rounded px-1 hover:text-[#F97316] "><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <button onClick={() => settogglemenu(!togglemenu)} className="block sm:hidden z-50">
          <Bars3Icon className="text-white h-7" />
        </button>
      </div>

      <nav className={`block sm:hidden z-0   w-full  transition-all bg-[#030303] duration-500  absolute left-0 right-0 ${togglemenu ? "top-[56px]" : "-top-[400px] "}`}>
        <ul className="flex flex-col mobile-view-nav text-white px-2 ">
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#home">Home</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#about">About</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#project">Project</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#resume">Resume</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] border-gray-10000 "><a className="w-full" onClick={() => settogglemenu(false)} href="#contact">Contact</a></li>
        </ul>
      </nav>


    </header>
  );
};

export default Header;
