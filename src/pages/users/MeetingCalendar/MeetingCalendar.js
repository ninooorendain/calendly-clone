import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Info, DateTime } from 'luxon'

import Calendar from '../../../shared/Calendar/';
import Clock from '../../../shared/icons/Clock';
import Troubleshoot from '../../../shared/icons/Troubleshoot';
import TimeSelect from './components/TimeSelect/TimeSelect';
import Timezone from './components/Timezone/Timezone';
import TimezoneCard from './components/Timezone/TimezoneCard.js';

import style from './MeetingCalendar.module.css'

const MeetingCalendar = () => {

  const [showTimecard, setShowTimecard] = useState(false);
  const [date, setDate] = useState(new Date());
  const [screenWidth, setScreenWidth] = useState(325);
  const [showTime, setShowTime] = useState(false);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const dateParams = query.get('date');
  const dateToString = DateTime.fromJSDate(date);

  const toggle = () => {
    setShowTimecard(true);
  }

  const formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const formatMonthYear = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month].join('-');
  }

  const onDateSelect = (dateCalendar) => {
    setDate(dateCalendar);
    history.push(`meeting-calendar?month=${formatMonthYear(dateCalendar)}&date=${formatDate(dateCalendar)}`);
  }

  const desktopOnSelect = (dateCalendar) => {
    setDate(dateCalendar);
    setShowTime(true);
    window.history.pushState(null, '', `meeting-calendar?month=${formatMonthYear(dateCalendar)}&date=${formatDate(dateCalendar)}`)
  }

  const onNextCalendar = (activeStartDate) => {
    history.push(`meeting-calendar?month=${formatMonthYear(activeStartDate)}`)
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth])

  useEffect(() => {
    history.push(`meeting-calendar?month=${formatMonthYear(date)}`)
  }, [])

  return (
    <>
      { !dateParams ?
        <div className="maxSm:relative" >
          <div className={`maxSm:pb-16 md:flex md:space-x-16 md:justify-center md:mx-auto maxSm:h-screen ${!showTime ? style.dateContainer : style.dateWithParams} md:border shadow-xl md:mt-24 md:rounded-2xl`}>
            <div className="flex-wrap md:border-r border-gray-200">
              <div className={`mx-auto mt-16 md:mt-8 pt-8 maxSm:text-center md:mx-8 maxSm:shadow-outerbox`}>
                <h2 className="text-secondary-200 font-bold text-xl">Nino Orendain</h2>
                <h1 className="text-2xl font-bold"> 30 Minute Meeting </h1>
              </div>
              <div className="mx-8 flex mt-8">
                <span><Clock /></span>
                <p className="text-secondary-200 text-lg ml-1"> 30 min</p>
              </div>
              <hr className="mt-8 md:hidden" />
            </div>
            <div className="flex-1">
              <div className="md:flex md:space-x-8">
                <div className="md:flex-1">
                  <h1 className="text-xl font-bold text-center mt-8">Select A Day</h1>
                  <Calendar
                    className="mx-4 mt-8"
                    onChange={screenWidth < 600 ? e => onDateSelect(e) : e => desktopOnSelect(e)}
                    onActiveStartDateChange={activeStartDate => onNextCalendar(activeStartDate.activeStartDate)}
                    value={date}
                  />
                  <div className="mt-6">
                    <Timezone onClick={toggle} />
                  </div>
                  <TimezoneCard
                    isShown={showTimecard}
                    onClick={() => setShowTimecard(false)}
                  />
                </div>
                {
                  showTime &&
                  <div className="flex-1">
                    <TimeSelect
                      day={dateToString.toFormat('EEEE')}
                      dateString={dateToString.toFormat('DDD')}
                      isDesktop
                      outerClass={style.timeSelectContainer}
                    />
                  </div>
                }
              </div>
            </div>
          </div>

        </div >
        :
        <TimeSelect
          day={dateToString.toFormat('EEEE')}
          dateString={dateToString.toFormat('DDD')}
          outerClass="md:hidden"
        />
      }
    </>
  );
}

export default MeetingCalendar;