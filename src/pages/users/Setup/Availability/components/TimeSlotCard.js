import React, { useState, useEffect } from 'react';
import FormAvailability from './FormStates/FormAvailability';
import FormDay from './FormStates/FormDay';
import FormHour from './FormStates/FormHour';
import FormMinutes from './FormStates/FormMinutes';
import FormOneDay from './FormStates/FormOneDay';
import SlotSlect from './SlotSelect';

import style from './TimeSlotCard.module.css'

const TimeSlotCard = () => {
  const [formAvailability, setFormAvailability] = useState('');
  const [active1, setActiveButton1] = useState(false);
  const [active2, setActiveButton2] = useState(false);
  const buttonStyle = 'border border-white bg-primary-500 text-white py-2 px-8 rounded-md focus:outline-white'
  const activeStyle = 'border-primary-500 focus:border-2 bg-white text-primary-500 focus:outline-none border py-2 px-8 rounded-md'
  // const [formHour, setFormHour] = useState(false);
  // const [formMinutes, setFormMinutes] = useState(false);
  // const [formOneday, setFormOneDay] = useState(false);
  // const [formDay, setFormDay] = useState(false);

  // const handleAvailability = () => {
  //   setFormAvailability(true);
  //   setFormHour(false)
  //   setFormMinutes(false)
  //   setFormOneDay(false)
  //   setFormDay(false)
  // }

  // const handleHour = () => {
  //   setFormAvailability(false);
  //   setFormHour(true);
  //   setFormMinutes(false);
  //   setFormOneDay(false)
  //   setFormDay(false)
  // }

  // const handleMinute = () => {
  //   setFormAvailability(false);
  //   setFormHour(false);
  //   setFormMinutes(true);
  //   setFormOneDay(false)
  //   setFormDay(false)
  // }

  // const handleOneDay = () => {
  //   setFormAvailability(false);
  //   setFormHour(false);
  //   setFormMinutes(false);
  //   setFormOneDay(true)
  //   setFormDay(false)
  // }

  // const handleFormDay = () => {
  //   setFormAvailability(false);
  //   setFormHour(false);
  //   setFormMinutes(false);
  //   setFormOneDay(false)
  //   setFormDay(true)
  // }

  const handleShowAvailabilityTime = () => {
    setActiveButton1(true);
    setActiveButton2(false);
    setFormAvailability('time')
  }

  const handleShowAvailabilityDay = () => {
    setActiveButton1(false);
    setActiveButton2(true);
    setFormAvailability('day')
  }



  return (
    <div className={`mx-auto mt-24 flex flex-col border ${style.timeCard}`}>
      <div className="md:flex bg-primary-300 space-x-8">
        <div className="flex-1 p-6">
          <h1 className="text-xl">Setup your availability</h1>
          <p className="mt-2">Let Plotsy know when you're typically availble to accept meetings.</p>
        </div>
        <div className="flex-wrap">
          <img src="/images/available.svg" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold">How long is your time slot?</h2>
        <div className="flex mb-4 md:space-x-4 maxSm:flex-col maxSm:space-y-4 mt-4">
          <button className={active1 ? activeStyle : buttonStyle} onClick={() => handleShowAvailabilityTime()}>Within a day</button>
          <button className={active2 ? activeStyle : buttonStyle} onClick={() => handleShowAvailabilityDay()}>Across Multiple days</button>
        </div>
        {/* <SlotSlect
          handleAvailability={() => handleAvailability()}
          handleHour={() => handleHour()}
          handleMinute={() => handleMinute()}
          handleOneDay={() => handleOneDay()}
          handleFormDay={() => handleFormDay()}
          handleDay={() => handleFormDay()}
        />
        <FormHour isShow={formHour} />
        <FormMinutes isShow={formMinutes} />
        <FormOneDay isShow={formOneday} />
        <FormDay isShow={formDay} /> */}
        <FormAvailability isShow={formAvailability == 'time'} />
        <FormDay isShow={formAvailability == 'day'} />
        <h3 className="text-center text-secondary-200 mt-8">Don't worry! You'll be able to further customize your availability later on. </h3>
      </div>
    </div>
  );
}

export default TimeSlotCard;
