'use client';

import classNames from "classnames";
import { useState } from "react"

export const Navbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    return (
<nav className="bg-dark-blue px-10 pb-5 pt-3
    flex justify-center">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <button data-collapse-toggle="navbar-default" type="button" 
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
      dark:focus:ring-gray-600" aria-controls="navbar-default" onClick={() => setOpenNav(!openNav)} aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={classNames("flex-row gap-10 font-gothic w-full md:block md:w-auto duration-300 md:opacity-100",
     openNav ? 'opacity-100' : 'opacity-0')}>
      <ul className="child:cursor-pointer child:font-medium
        child:ease-in-out child:duration-300 z-10 child:pr-10 child:p-2 child-hover:text-aqua-green md:child-hover:bg-transparent child-hover:bg-slate-950
       flex md:flex-row md:relative absolute md:bg-none bg-dark-blue rounded-xl flex-col md:p-0 mt-4 text-2xl" >
        <li>
          <a href="#" aria-current="page">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
        <li>
          <a href="#">EXPERIENCE</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
} 