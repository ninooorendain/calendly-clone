import React from 'react';
import DayLists from '../DayLists';

const FormAvailability = ({ isShow }) => {
  return (
    <div>
      {
        isShow &&
        <>
          <h2 className="font-semibold">Available Hours</h2>
          <div className="flex space-x-8">
            <div class="relative inline-block w-full text-gray-700 flex-1 mt-2">
              <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:shadow-outline" placeholder="Regular input">
                <option>9:00 AM</option>
                <option>9:00 AM</option>
                <option>9:00 AM</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="relative inline-block w-full text-gray-700 flex-1 mt-2">
              <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:border-primary-500" placeholder="Regular input">
                <option>5:00 PM</option>
                <option>9:00 AM</option>
                <option>9:00 AM</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
              </div>
            </div>
          </div>
          <div className="days mt-6">
            <h2 className="font-semibold">Available Days</h2>
            < DayLists />
          </div>
          <button className="mt-8 bg-primary-500 text-white py-2 rounded-full px-6 focus:outline-none" type="button">Submit</button>
        </>
      }
    </div>
  );
}

export default FormAvailability;