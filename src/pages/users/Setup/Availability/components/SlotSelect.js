import React from 'react';

const SlotSlect = ({ handleHour, handleMinute, handleOneDay, handleDay, handleAvailability }) => {
  const buttonStyle = 'border border-white bg-primary-500 text-white py-2 px-8 rounded-md focus:outline-white focus:border-primary-500 focus:border-2 focus:bg-white focus:text-primary-500'
  return (
    <div className="flex mb-4 md:space-x-4 maxSm:flex-col maxSm:space-y-4">
      <button className={buttonStyle} onClick={handleHour}>Hour</button>
      <button className={buttonStyle} onClick={handleMinute}>Minute</button>
      <button className={buttonStyle} onClick={handleOneDay}>One Day</button>
      <button className={buttonStyle} onClick={handleDay}>Days </button>
      <button className={buttonStyle} onClick={handleAvailability}>Availability </button>
    </div>
  );
}

export default SlotSlect;