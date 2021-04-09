import React from 'react';
import Duplicate from '../../../../shared/icons/Duplicate';
import TrashIcon from '../../../../shared/icons/TrashIcon';
import Header from '../../components/Header';
import style from './AvailabilitySettings.module.css'
import data from './data';

const AvailabilitySettings = () => {
  return (
    <div>
      <Header />
      <div className="bg-white py-8 shadow-md">
        <h1 className="text-2xl md:ml-96">Setup your Availability Within Day</h1>
      </div>
      <div className="bg-primary-100 pt-4 pb-20">
        <div className=" max-w-6xl mx-auto">
          <p className="text-sm">Choose a schedule below to edit or create a new one that you can apply to your event types</p>
          <div>
            <p className="text-sm text-secondary-200 mt-4">SCHEDULE</p>
            <div className="mt-4 space-x-4">
              <button className="border rounded-md py-3 px-8 font-semibold bg-white text-sm">Default Hours</button>
              <button className="border rounded-md py-3 px-4 text-primary-500 border-primary-500 text-sm">+ New Schedule</button>
            </div>
          </div>
          <div className="bg-white rounded-md mt-4 pb-4 border shadow-sm">
            <div className="py-4 px-8">
              <p className="font-semibold">Default Hours</p>
              <p className="text-secondary-200 font-thin text-sm mt-0.5">default schedule</p>
            </div>
            <div className="md:flex md:space-x-16 px-8">
              <div>
                <p className="text-secondary-200">ACTIVE ON</p>
                <div className={`text-primary-500 mt-4 cursor-pointer flex px-4 p-2 -ml-4 focus:bg-primary-400 rounded-md ${style.hoverButton}`}>
                  3 Event Types
                  <svg className="w-4 h-4 fill-current mt-1.5 ml-1" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
              <div>
                <p className="text-secondary-200">TIMEZONE</p>
                <div className={`text-primary-500 mt-4 cursor-pointer flex px-4 p-2 -ml-4 focus:bg-primary-400 rounded-md ${style.hoverButton}`}>
                  Philippines Time
                  <svg className="w-4 h-4 fill-current mt-1.5 ml-1" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
            <hr className="mt-4 border-b" />
            <div className="md:flex">
              <div className="border-r-2 px-8 py-4">
                <p className="font-semibold">Set your weekly hours</p>
                <div className="flex">
                  <div className="relative flex-wrap">
                    {
                      data['allDays'].map((item, index) => (
                        <div className="flex space-y-4 border-b py-4 ">
                          <div className="mt-6"><input type="checkbox" className="cursor-pointer" /></div>
                          <div className="pt-2.5 flex-1">
                            <p className="ml-2 text-sm font-bold">{item}</p>
                          </div>
                          <div className="flex ml-8 space-x-2">
                            <div className="text-gray-700">
                              <select className="w-full h-10 pl-2 pr-6 text-base placeholder-gray-600 border appearance-none focus:border-primary-500 focus:outline-none" placeholder="Regular input">
                                <option>12:00 AM</option>
                                <option>1:00 AM</option>
                                <option>2:00 AM</option>
                              </select>
                            </div>
                            <p className="mt-2.5">-</p>
                            <div className="text-gray-700">
                              <select className="w-full h-10 pl-2 pr-6 text-base placeholder-gray-600 border appearance-none focus:border-primary-500 focus:outline-none" placeholder="Regular input">
                                <option>12:00 AM</option>
                                <option>1:00 AM</option>
                                <option>2:00 AM</option>
                              </select>
                            </div>
                            <div className="mt-2.5 ml-8">
                              <TrashIcon width="25" height="25" color="#b3b5ba" />
                            </div>
                          </div>
                          <div className="flex flex-1 pt-1.5 md:pl-56">
                            <div className="flex space-x-4">
                              <div>
                                <p className="text-2xl text-secondary-200 cursor-pointer">+</p>
                              </div>
                              <div className="mt-1.5 cursor-pointer">
                                <Duplicate color="#b3b5ba" />
                              </div>
                            </div>
                          </div>
                        </div>

                      ))
                    }
                  </div>
                  <div className="flex-none">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default AvailabilitySettings;
