import React from 'react';

export default function IconButton({ iconClass, borderColor }) {
  return (
    <div>
      <a
        className={`inline-flex w-[50px] h-[50px] bg-transparent border-[.2rem] border-solid rounded-[50%] text-xl justify-center items-center hover:scale-110 transition-[0.3s]`}
        style={{
          borderColor: borderColor,
        }}
        href="#">
        <i className={iconClass} style={{ color: borderColor }}></i>
      </a>
    </div>
  );
}
