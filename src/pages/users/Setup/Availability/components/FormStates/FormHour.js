import React from 'react';
import Time from '../../../../MeetingCalendar/components/TimeSelect/components/Time';

const FormHour = ({ isShow }) => {
  return (
    <>
      {
        isShow &&
        <div>
          <h1 className="font-semibold">Select Day:</h1>
          <div className="md:flex md:space-x-8 mb-8">
            <input type="date" className="block w-full py-3 px-2 mt-2
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500" />
          </div>
          <Time is60Mins />
        </div>
      }
    </>
  );
}

export default FormHour;