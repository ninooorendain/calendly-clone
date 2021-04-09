import React from 'react';
import Calendar from 'react-calendar';

import KeyboardArrowLeft from '../icons/KeyboardArrowLeft';
import KeyboardArrowRight from '../icons/KeyboardArrowRight';

import './Calendar.css'

const CustomCalendar = ({
  markExisting = [],
  markComplete = [],
  ...props }) => {
  return (
    <>
      <Calendar
        calendarType={'US'}
        prevLabel={<KeyboardArrowLeft width="24" height="27" color={!new Date() ? '#0C5F8D' : '#b3b5ba'} />}
        prev2Label={null}
        nextLabel={<KeyboardArrowRight width="24" height="27" />}
        next2Label={null}
        defaultView="month"
        minDate={new Date()}
        {...props}
      />
    </>
  )
};

export default CustomCalendar;
