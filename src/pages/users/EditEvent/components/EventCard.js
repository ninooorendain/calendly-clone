import React from 'react';

const EventCard = ({ titleText, subTitleText, children, handleClick, icon }) => {
  return (
    <div className="border border-black" onClick={handleClick}>
      <div className="space-x-3 cursor-pointer flex px-4 py-6 ">
        <div className={!icon && 'bg-yellow-300 w-4 h-4 rounded-full mt-0.5'}>
          {icon}
        </div>
        <div>
          <p>{titleText}</p>
          <p className="text-sm text-secondary-200 -mt-1">{subTitleText}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default EventCard;
