import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between border border-b-secondary p-4 backdrop-blur-lg relative">
      <Link>
        <div className="flex sm:flex-row flex-col items-center mx-0 sm:mx-12 gap-2">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            className="w-14 h-14 rounded-full"
            alt="Profile"
          />
          <h1 className="text-primary font-medium ml-3 text-3xl">Fikiru Demlew</h1>
        </div>
      </Link>

      {/* Hamburger menu button for small screens */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Menu items */}
      <div
        className={`
          ${menuOpen ? 'flex' : 'hidden'}
          flex-col gap-6 items-center absolute top-full right-0 bg-secondary p-6 rounded-b-lg shadow-lg z-50
          sm:static sm:flex sm:flex-row sm:gap-10 sm:bg-transparent sm:p-0 sm:rounded-none sm:shadow-none sm:items-center mr-12
        `}
      >
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
          Home
        </button>
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
          About
        </button>
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
          Projects
        </button>
        <Link to={'/contact'}>
          <h1 className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300">
            Contact
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
