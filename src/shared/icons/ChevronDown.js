import React from 'react';

const ChevronDown = ({ color }) => {
  return (
    <svg className="w-4 h-4 fill-current mt-2 ml-1" viewBox="0 0 20 20" stroke={color}><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
  )
}

export default ChevronDown;