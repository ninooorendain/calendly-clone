import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ArrowCircleLeft from '../../../../../shared/icons/ArrowCircleLeft';

import Timezone from '../Timezone';
import TimezoneCard from '../Timezone/TimezoneCard.js';
import Time from './components/Time.js';

import style from './TimeSelect.module.css'

const TimeSelect = ({ day, dateString, outerClass, isDesktop }) => {
  const [showTimecard, setShowTimecard] = useState(false);
  const history = useHistory();
  const toggle = () => {
    setShowTimecard(true);
  }
  return (
    <div className="relative" className={outerClass}>
      <div className="pb-16">
        <div className={`mx-auto maxSm:mt-16 pt-8 text-center maxSm:shadow-outerbox`}>
          <div className="rounded-full bg-white border-2 border-gray-200 w-12 h-12 ml-6 md:hidden" onClick={() => history.goBack()}>
            <ArrowCircleLeft width="27" height="27" strokeColor="#00A3FA" className="ml-2 mt-2" />
          </div>
          {
            !isDesktop ?
              <div>
              <h1 className="text-2xl font-semi-bold">{day}</h1>
                <p>{dateString}</p>
              </div>
              :
              <div className="text-left mt-16">
                <p>{day} {dateString}</p>
              </div>
          }
          <div className="mt-6 md:hidden">
            <Timezone onClick={toggle} isCentered />
          </div>
          <hr className="mt-8" />
          <Time is30Mins />
        </div>
        <div className="mt-8 md:hidden">
          <TimezoneCard
            isShown={showTimecard}
            onClick={() => setShowTimecard(false)}
          /></div>
      </div>
    </div>
  )
}

export default TimeSelect;