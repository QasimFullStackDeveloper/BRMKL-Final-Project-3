import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-screen py-[2rem] px-[9%] bg-transparent backdrop-blur-lg backdrop-opacity-100 flex justify-between items-center z-50">
      <a href="#" className="text-[2.5rem] text-[#ededed] font-semibold">
        Qasim.
      </a>

      <nav className="text-[1.5rem] text-[#ededed] font-medium">
        <a
          className="ml-[3.5rem] hover:text-[#00abf0] transition-[0.3s] active:text-[#00abf0]"
          href="#Home">
          Home
        </a>
        <a
          className="ml-[3.5rem] hover:text-[#00abf0] transition-[0.3s] active:text-[#00abf0]"
          href="#About">
          About
        </a>
        <a
          className="ml-[3.5rem] hover:text-[#00abf0] transition-[0.3s] active:text-[#00abf0]"
          href="#Education">
          Education
        </a>
        <a
          className="ml-[3.5rem] hover:text-[#00abf0] transition-[0.3s] active:text-[#00abf0]"
          href="#Skills">
          Skills
        </a>
        <a
          className="ml-[3.5rem] hover:text-[#00abf0] transition-[0.3s] active:text-[#00abf0]"
          href="#Contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
