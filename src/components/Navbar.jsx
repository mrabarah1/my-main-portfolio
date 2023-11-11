import {  FaBarsStaggered } from "react-icons/fa6";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';
import { links } from '../data'
import { useState } from "react";

const themes = {
  winter: 'winter',
  dark: 'dark',
}

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const [theme, setTheme] = useState(themes.winter);

  const handleTheme = () => {
    const { winter, dark} = themes;
    const newTheme = theme === winter ? dark : winter;
    document.documentElement.setAttribute('data-theme', theme)
    setTheme(newTheme);
  }
  return (
    <nav className="bg-[#52525253]">
      {/* div to center all the content */}
      <div className=" mx-auto max-w-7xl px-8 py-4 flex gap-x-8 sm:flex-row sm:gap-x-40 sm:items-center sm:py-8 lg:flex-row lg:gap-x-80 lg:items-center lg:py-8">
        {/* flex-col removed */}
        {/* logo */}
        <h2 className="text-3xl font-bold">
          <NavLink href="/">
            codez<span className="text-emerald-600">wayz</span>
          </NavLink>
        </h2>
        {/* links */}
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <NavLink
                to={url}
                key={link.id}
                className="capitalize text-xl font-semibold tracking-wide hover:text-emerald-600 duration-300 hidden md:flex"
              >
                {text}
              </NavLink>
            );
          })}
        </div>

        <div>
          <div className="flex justify-center items-center gap-x-4 mt-2 mr-6">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleTheme} />
              {/* sun icon */}
              <BsSunFill className="swap-on h-4 w-4" />
              {/* moon icon */}
              <BsMoonFill className="swap-off h-4 w-4" />
            </label>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <button
              onClick={openSidebar}
              className=" top-8 text-3xl bg-transparent border-transparent text-slate-900 cursor-pointer animate-none duration-300 ease-in-out sm:hidden md:hidden "
            >
              {/* <FaBars /> */}
              <FaBarsStaggered className="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
