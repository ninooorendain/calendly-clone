import React from 'react';

const CheckIcon = ({ width, height, color = '#b3b5ba' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} width={width} height={height}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default CheckIcon;