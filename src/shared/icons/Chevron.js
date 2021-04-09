import React from 'react';

const Chevron = ({ width = 20, height = 20, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" stroke="currentColor" width={width} height={height}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" stroke={color} />
    </svg>
  );
}

export default Chevron;