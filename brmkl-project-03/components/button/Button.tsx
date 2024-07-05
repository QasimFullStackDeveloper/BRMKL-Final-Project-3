import React from 'react';

export default function Button({ text, textColor, bgColor }) {
  return (
    <div>
      <a
        className={`inline-flex w-[9.4rem] h-[100%] border-2 border-solid border-[#00abf0] rounded-lg text-[1.18rem] font-semibold tracking-[1px] justify-center items-center hover:scale-105 transition-[0.3s]`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        href="#">
        {text}
      </a>
    </div>
  );
}
