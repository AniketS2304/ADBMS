import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-orange-600 text-white  h-16 shadow-md'>
      <div className="nav-header text-3xl bg-white text-orange-600 rounded-md py-2 ">
        Swiggy
      </div>
      <div className="nav-menu">
        <ul className='flex space-x-6 mx-[20px]'>
          <li>
            <a href="#" aria-label="Home" className="hover:text-orange-200 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" aria-label="About" className="hover:text-orange-200 transition duration-300">About</a>
          </li>
          <li>
            <a href="#" aria-label="Contact" className="hover:text-orange-200 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
