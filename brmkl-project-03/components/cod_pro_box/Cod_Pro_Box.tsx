import React from 'react';

export default function Cod_Pro_Box({ heading, percent, length }) {
  return (
    <div className="py-4 px-0">
      <h3 className="font-bold text-[1.5rem] flex justify-between">
        {heading} <span className="text-[#ededed]">{percent}</span>
      </h3>
      <div className="h-[2.4rem] rounded-[.6rem] border-[.2rem] border-[#00abfe] text-[#00abf0] p-2 my-4 mx-0">
        <div
          className="h-[100%] rounded-[.3rem] bg-[#00abfe] w-[90%]"
          style={{ width: length }}></div>
      </div>
    </div>
  );
}
