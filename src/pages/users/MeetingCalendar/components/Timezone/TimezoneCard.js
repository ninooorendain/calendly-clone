import React, { useState } from 'react';
import Troubleshoot from '../../../../../shared/icons/Troubleshoot';

import style from './Timezone.module.css'

const TimezoneCard = ({ isShown, onClick }) => {

  return (
    <>
      {
        isShown ?
          <>
            <div className={`${style.cardContainer} rounded-t-md absolute maxSm:top-5 md:top-36 md:border maxSm:pb-24 bg-white maxSm:w-full flex flex-col justify-start maxSm:mx-auto px-4 maxSm:overflow-scroll`}>
              <div>
                <input type="text"
                  placeholder="Search..."
                  className="block w-full py-3 px-2 mt-8
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
                />
                <div className="flex mt-6">
                  <p className="font-semibold text-xs">Timezone</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-2 text-secondary-400 font-bold text-sm">US CANADA </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">AMERICA </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">AFRICA </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">ASIA </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">ATLANTIC </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">AUSTRALIA </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">UTC </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">UTC-TIME</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">EUROPE </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex">
                    <h2 className="mt-6 text-secondary-400 font-bold text-sm">PACIFIC </h2>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                  <li className="flex text-secondary-400 font-light text-sm">
                    <p className="flex-1">Pacific Time - US & Canada</p>
                    <p>6:09am</p>
                  </li>
                </ul>
              </div>

            </div>
            <div className=" fixed bottom-0 pt-2.5 h-16 bg-white w-full px-8 md:hidden">
              <button className={`border border-black py-2 rounded-md bg-white ${style.closeBtn}`} onClick={onClick}>Close</button>
            </div>
          </>
          : <div className="flex flex-col justify-center mb-2 mx-8 relative md:hidden">
            <button className={`border rounded-md text-secondary-200 py-2 relative ${style.troubleshootBtn}`}>
              <span className="absolute left-16 bottom-2"><Troubleshoot width="18" height="18" color="#444752" />
              </span> Troubleshoot
              </button>
          </div>
      }
    </>
  );
}

export default TimezoneCard;