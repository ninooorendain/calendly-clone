import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../../../../shared/icons/Calendar';
import Clock from '../../../../shared/icons/Clock';
import SearchIcon from '../../../../shared/icons/SearchIcon';

import style from '../CreateEvent.module.css'

const SuccessCreate = () => {
  return (
    <div className={`${style.containerEvent} flex flex-col  text-center border ounded-md  mt-32 mx-auto shadow-xl`}>
      <p className="mt-8 font-bold">Confirmed</p>
      <p className="mt-4 font-light">You are schedule with Nino Orendain</p>
      <div className="md:mx-auto mt-16 border-t">
        <div className="flex mt-6">
          <span><Clock /></span>
          <p className="text-secondary-200 text-lg ml-1"> 30 min</p>
        </div>
        <div className="flex mt-6">
          <span><Calendar color="green" /></span>
          <p className="text-green-500 text-lg ml-1"> 9:00am - 9:30am, Thursday, April 15, 2021</p>
        </div>
        <div className="flex mt-6">
          <span><SearchIcon width="30" height="30" /></span>
          <p className="text-secondary-200 text-lg ml-1"> Taipei Time</p>
        </div>
      </div>
      <div className="mt-24">
        <Link to="/dashboard" className="bg-primary-500 text-white p-2 rounded-md">Back to Dashboard</Link>
      </div>
    </div>
  )
}

export default SuccessCreate;