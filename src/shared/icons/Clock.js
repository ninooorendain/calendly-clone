import React from 'react';

const Clock = ({ width = 30, height = 30, color = '#9e9e9e' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" stroke="currentColor" width={width} height={height}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" />
    </svg>
  )
}

export default Clock;
