import React from 'react';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center flex-wrap py-8 px-[9%] bg-[#112e42]">
      <div className="text-[1.6rem]">
        <p>Copyright &copy; 2024 by Qasim | All Rights Reserved.</p>
      </div>

      <a
        className="inline-flex justify-center items-center p-[.8rem] bg-[#00abf0] border-[.2rem] border-[#00abf0] rounded-[.6rem] hover:scale-105 hover:transition"
        href="#Home">
        <i className="fa-solid fa-arrow-up text-[2.2rem] text-[#081b29]"></i>
      </a>
    </footer>
  );
}
