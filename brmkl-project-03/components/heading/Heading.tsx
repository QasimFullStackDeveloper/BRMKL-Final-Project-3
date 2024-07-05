import React from 'react';

export default function Heading({ heading, marg_t, marg_r, marg_l }) {
  return (
    <h3
      className="font-bold text-[2.5rem] mt-0 mx-0 mb-[1.5rem]"
      style={{
        marginTop: marg_t,
        marginRight: marg_r,
        marginLeft: marg_l,
      }}>
      {heading}
    </h3>
  );
}
