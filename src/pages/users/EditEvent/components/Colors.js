import React from 'react';

const Colors = () => {
  const base = 'w-8 h-8 rounded-full cursor-pointer'
  return (
    <div className="flex space-x-2">
      <div className={`${base} bg-red-600`}></div>
      <div className={`${base} bg-pink-500`}></div>
      <div className={`${base} bg-purple-500`}></div>
      <div className={`${base} bg-indigo-600`}></div>
      <div className={`${base} bg-yellow-300`}></div>
      <div className={`${base} bg-green-400`}></div>
    </div>
  )
}

export default Colors;
