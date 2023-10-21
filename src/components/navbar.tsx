import React, { useState } from "react";
import { Link } from 'react-scroll'

const NavBar : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="flex items-center justify-around gradient h-20 p-4 fixed w-full">
      <h1 className="text-lg main-color font-extrabold">BENO</h1>
      <div>
        <div className="xl:hidden">
          <button
            className=" main-color font-work-sans text-2xl "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            Menu
          </button>
        </div>

        <div
          data-testid="menu"
          className={`${
            isMenuOpen ? 'block gradient' : 'hidden'
          } xl:flex items-center main-color font-bold cursor-pointer list-none transition-all md:gradient ease-in-out duration-300 xl:space-x-4 xl:ml-3 absolute left-0 w-full xl:w-auto xl:static xl:h-auto xl:bg-transparent mt-2 xl:mt-0`}
        >
          <li className="y-6 xl:my-0 ml-2 mr-4 my-6">
            <Link
              to="home" smooth={true} duration={500}
              className="my-6 xl:my-0 no-underline main-color font-bold ml-2 mr-4"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="y-6 xl:my-0 ml-4 my-8 ">
            <Link
              to="about" smooth={true} duration={500}
              className="my-6 xl:my-0 no-underline main-color font-bold mr-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li className="y-6 xl:my-0  main-color font-bold ml-4 mr-4 my-8">
            <Link
             to="projects" smooth={true} duration={500}
              className="my-6 no-underline main-color font-bold xl:my-0"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
          </li>
          <li className="y-6 xl:my-0  main-color font-bold ml-4 mr-4 my-8">
            <Link
              to="contact" smooth={true} duration={500}
              className="my-6 no-underline main-color font-bold xl:my-0"
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
