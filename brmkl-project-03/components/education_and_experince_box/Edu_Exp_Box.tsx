import React from 'react';

export default function Edu_Exp_Box({ duration, heading, info }) {
  return (
    <div className="relative pl-[2rem] before:content-[''] before:absolute before:top-0 before:-left-[.9rem] before:w-[1.5rem] before:h-[1.5rem] before:bg-[#00abf0] before:rounded-[50%]">
      <div className="relative p-[1.5rem] border-[.2rem] border-[#00abf0] rounded-[.6rem] mb-[2rem]">
        <div className="flex text-[1.4rem] text-[#00abf0] pb-[.5rem] items-center gap-4">
          <i className="fa-solid fa-calendar-days"></i> {duration}
        </div>
        <h3 className="font-bold text-[1.6rem]">{heading}</h3>
        <p className="text-[1.2rem] pt-[.5rem]">{info}</p>
      </div>
    </div>
  );
}
