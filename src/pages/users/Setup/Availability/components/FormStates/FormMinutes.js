import React, { useState } from 'react';
import Time from '../../../../MeetingCalendar/components/TimeSelect/components/Time';

const FormMinutes = ({ isShow }) => {
  const [data, setData] = useState('');
  const handleMinutes = (e) => {
    setData(e.category)
  }
  return (
    <>
      {
        isShow &&
        <div>
          <h1 className="font-semibold">Select Day:</h1>
          <input type="date" className="block w-full py-3 px-2 mt-2 mb-8
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500" />
          <h1 className="font-semibold">Select Minutes</h1>
          <div class="relative inline-block w-full text-gray-700 flex mt-2 mb-8">
            <select
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:shadow-outline"
              placeholder="Regular input"
              onChange={({ currentTarget }) => handleMinutes({ ...data, category: currentTarget.value })}
            >
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes </option>
              <option value="60">60 Minutes</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
          </div>
          <Time
            is30Mins={data == 30}
            is60Mins={data == 60}
            is15Mins={data == 15}
          />
        </div>
      }
    </>
  );
}

export default FormMinutes;