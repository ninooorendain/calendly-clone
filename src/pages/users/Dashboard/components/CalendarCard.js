import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cog from '../../../../shared/icons/Cog';
import Duplicate from '../../../../shared/icons/Duplicate';

import style from './CalendarCard.module.css'

const CalendarCard = ({ topColor, numberMins, handleCheckbox, handleSetting, showCardSettings, isToggle }) => {
  const handleColorTop = () => {
    if (topColor == 'red') {
      return 'border-red-500'
    } else if (topColor == 'yellow') {
      return 'border-yellow-200'
    } else {
      return 'border-primary-500'
    }
  }

  return (
    <>
      <div className={`cursor-pointer shadow-md  ${isToggle && 'text-secondary-200'}`}>
        <div className={`border-t-4 rounded-md ${isToggle ? 'bg-gray-100' : 'bg-white'} relative ${style.cardWidth} ${isToggle ? 'border-secondary-200' : handleColorTop()}`}>
          <div className="flex  p-4 ">
            <input type="checkbox" className="cursor-pointer maxSm:hidden" onChange={handleCheckbox} />
            <div className="absolute right-2 cursor-pointer" onClick={handleSetting}>
              <Cog width="20" height="20" />
              {
                showCardSettings &&
                <div className="absolute -right-8 text-left bg-white pl-4 pr-16 py-4 shadow-md rounded-md">
                  <ul className="space-y-2">
                    <li>Edit</li>
                    <li>Clone</li>
                    <li>Note</li>
                    <li>Delete</li>
                  </ul>
                </div>
              }
            </div>
          </div>
          <div className="mt-4  p-4 ">
            <p className="text-lg">{numberMins} Minute Meeting</p>
            <p className="text-sm text-secondary-200 mt-0.5 mb-4">{numberMins}, One-on-One</p>
            <Link to="meeting-calendar" className={isToggle ? 'text-secondary-200' : 'text-primary-500'}> View Booking Page</Link>
          </div>
          <hr />
          <div className="mt-2 p-4">
            <div className="flex">
              <div className="flex">
                <Duplicate color={isToggle ? '#b3b5ba' : '#00A3FA'} width="18" height="18" />
                <p className={`text-sm ml-1 ${isToggle ? 'text-secondary-200' : 'text-primary-500'}`}>Copy Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarCard;