import React from 'react';

export default function Input_Box({ type1, type2, place1, place2 }) {
  return (
    <div className="relative flex justify-between flex-wrap">
      <div className="relative w-[49%] my-[.8rem] mx-0">
        <input
          className="w-[100%] h-[90%] p-[1.5rem] text-[1.6rem] text-[#ededed] bg-transparent rounded-[.6rem] border-[.2rem] border-[#00abf0] placeholder:text-[#ededed] focus:outline-none"
          type={type1}
          placeholder={place1}
          required
        />
      </div>

      <div className="relative w-[49%] my-[.8rem] mx-0">
        <input
          className="w-[100%] h-[90%] p-[1.5rem] text-[1.6rem] text-[#ededed] bg-transparent rounded-[.6rem] border-[.2rem] border-[#00abf0] placeholder:text-[#ededed] focus:outline-none"
          type={type2}
          placeholder={place2}
          required
        />
      </div>
    </div>
  );
}
