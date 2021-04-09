import React from 'react';
import TrashIcon from '../../../../../../shared/icons/TrashIcon';

const FormOneDay = ({ isShow }) => {
  return (
    <>
      {
        isShow &&
        <div>
          <h1 className="font-semibold">Select Day:</h1>
          <input type="date" className="block w-full py-3 px-2 mt-2
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500" />

          <h1 className="mt-8">Select Time: </h1>
          <div className="md:flex md:space-x-8">
            <div class="relative inline-block w-full text-gray-700 mt-2 flex-wrap">
              <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:shadow-outline" placeholder="Regular input">
                <option>9:00 AM</option>
                <option>9:00 AM</option>
                <option>9:00 AM</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="relative inline-block w-full text-gray-700 flex-wrap mt-2">
              <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:shadow-outline" placeholder="Regular input">
                <option>9:00 AM</option>
                <option>9:00 AM</option>
                <option>9:00 AM</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex space-x-4 mt-2">
                <div className="mt-2">
                  <TrashIcon width="25" height="25" />
                </div>
                <p className="text-3xl">+</p>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-green-500 text-white py-2 rounded-full px-6 focus:outline-none" type="button">Confirm</button>
        </div>
      }
    </>
  );
}

export default FormOneDay;