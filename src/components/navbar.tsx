import React, { useState } from "react";
import { Link } from 'react-scroll'
import { FaBars} from 'react-icons/fa';

const NavBar : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between pl-16 pr-16 gradient h-20 p-4 fixed w-full">
      <h1 className="text-2xl secondary-color font-extrabold ">
        <Link
         to="home" smooth={true} duration={500}
         className="cursor-pointer"
        >
          BENO
        </Link>
      </h1>
      <div>
        <div className="xl:hidden">
          <button
            className=" secondary-color font-work-sans text-2xl "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>
        </div>

        <div
          data-testid="menu"
          className={`${
            isMenuOpen ? 'block gradient' : 'hidden'
          } xl:flex items-center secondary-color gap-3 font-bold cursor-pointer list-none transition-all md:gradient ease-in-out duration-300 xl:space-x-4 xl:ml-3 absolute left-0 w-full xl:w-auto xl:static xl:h-auto xl:bg-transparent mt-2 xl:mt-0`}
        >
          <li className="y-6 xl:my-0 ml-2 mr-4 my-6">
            <Link
              to="home" smooth={true} duration={500}
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="y-6 xl:my-0 ml-4 my-8 ">
            <Link
              to="about" smooth={true} duration={500}
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li className="y-6 xl:my-0  secondary-color hover:main-colorr  font-bold ml-4 mr-4 my-8">
            <Link
             to="projects" smooth={true} duration={500}
             className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
          </li>
          <li className="y-6 xl:my-0  secondary-color  font-bold ml-4 mr-4 my-8">
            <Link
              to="contact" smooth={true} duration={500}
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
