import React from 'react'

const ArrowCircleLeft = ({ width = 20, strokeColor, height = 20, className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={strokeColor} width={width} height={height} className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export default ArrowCircleLeft;