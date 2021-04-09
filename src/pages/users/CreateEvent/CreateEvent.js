import React from 'react';
import { useHistory } from 'react-router';
import ArrowCircleLeft from '../../../shared/icons/ArrowCircleLeft';
import Calendar from '../../../shared/icons/Calendar';
import Clock from '../../../shared/icons/Clock';
import SearchIcon from '../../../shared/icons/SearchIcon';

import style from './CreateEvent.module.css'


const CreateEvent = () => {
  const history = useHistory();
  return (
    <div className="maxSm:relative">
      <div className={`md:flex  md:border shadow-xl md:mt-24 md:rounded-2xl md:space-x-4 md:justify-center md:mx-auto ${style.containerEvent}`}>
        <div className="px-8 flex-1 md:border-r border-gray-200  ">
          <div className="rounded-full mt-8 bg-white border-2 border-gray-200 w-12 h-12" onClick={() => history.goBack()}>
            <ArrowCircleLeft width="27" height="27" strokeColor="#00A3FA" className="ml-2 mt-2" />
          </div>
          <p className="mt-8 text-secondary-400">Nino Orendain</p>
          <h1 className="text-xl font-bold mt-2">Coffee Meeting</h1>
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
        <div className="flex-1 px-4">
          <p className="font-bold mt-8">Enter Details</p>
          <div>
            <p className="text-sm font-semibold mt-6">Name*</p>
            <input type="text"
              placeholder=""
              className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
              required />
          </div>
          <div>
            <p className="text-sm font-semibold mt-6">Email (optional)</p>
            <input type="email"
              placeholder=""
              className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <p className="text-sm font-semibold mt-6">Phone *</p>
            <input type="text"
              placeholder=""
              className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
              required
            />
          </div>
          <div>
            <p className="text-sm font-semibold mt-6">Notes</p>
            <input type="text"
              placeholder=""
              className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500 h-32"
              required
            />
          </div>
          <button className="text-white bg-primary-500 px-3 py-2 mt-8 rounded-md" onClick={() => history.push('/success/make-event')}>Schedule Event</button>
        </div>
      </div>
    </div>
  )
}

export default CreateEvent;