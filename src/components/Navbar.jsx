import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';
import { links } from '../data'

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="bg-[#52525253]">
      {/* div to center all the content */}
      <div className=" mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-40 sm:items-center sm:py-8 lg:flex-row lg:gap-x-80 lg:items-center lg:py-8 ">
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
                to={url} key={link.id}
                className="capitalize text-xl font-semibold tracking-wide hover:text-emerald-600 duration-300 hidden md:flex"
              >
                {text}
              </NavLink>
            );
          })}
        </div>
        <button
          onClick={openSidebar}
          className="fixed top-8 right-12 text-4xl bg-transparent border-transparent text-slate-900 cursor-pointer animate-bounce duration-300 ease-in-out sm:hidden md:hidden"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar
