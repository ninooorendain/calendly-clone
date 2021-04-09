import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Cog from '../../../shared/icons/Cog';
import SearchIcon from '../../../shared/icons/SearchIcon';
import TrashIcon from '../../../shared/icons/TrashIcon';
import Header from '../components/Header';
import CalendarCard from './components/CalendarCard';
import Subheader from './components/Subheader';
import style from './Dashboard.module.css'

const Dashboard = () => {
  const [isCheck, setIsCheck] = useState(false)
  const [isToggle, setIsToggle] = useState(false)
  const [showSettings, setShowSettings] = useState(false);
  const handleCheckbox = (e) => {
    setIsCheck(!isCheck)
  }
  const handleToggle = () => {
    setIsToggle(!isToggle)
  }
  const handleSetting = () => {
    setShowSettings(!showSettings)
  }
  return (
    <div>
      <Header isNotFixed />
      <Subheader isActive showCreate />
      <div className="bg-primary-100 md:h-screen">
        <div className={`md:mx-auto ${style.maxWidth} py-8 maxSm:px-4`}>
          <div className="flex">
            <span className="mr-2"><SearchIcon width="20" height="20" /></span><input type="text" placeholder="Filter" className="bg-primary-100 focus:outline-none" />
          </div>
          <div className="md:flex my-4 relative">
            <div className="flex flex-1">
              <div className="bg-secondary-10 text-secondary-50 py-2 px-4 rounded-full text-center">
                <p>N</p>
              </div>
              <div className="ml-4 text-sm">
                <p>Nino Orendain</p>
                <Link className="text-primary-500">plorsy.com/ninoorendain</Link>
              </div>
            </div>
            <div className="flex-1 text-right md:absolute md:right-0 maxSm:mt-4">
              <div className="flex space-x-4">
                <Link to="/user/event-type"> <button className="text-primary-500 border border-primary-500 p-1.5 rounded-md text-sm">+ New Event Type</button> </Link>
                <div className="mt-2">
                  <Cog width="20" height="20" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="md:flex mt-4 maxSm:space-y-8 md:space-x-8 justify-center">
            <CalendarCard
              topColor="yellow"
              numberMins="15"
              handleCheckbox={(e) => handleCheckbox(e)}
              handleSetting={() => handleSetting()}
              showCardSettings={showSettings}
              isToggle={isToggle}
            />
            <CalendarCard numberMins="30" handleSetting />
            <CalendarCard topColor="red" numberMins="60" />
          </div>
        </div>
      </div>
      {
        isCheck ?
          <div className="h-16 bg-primary-400 fixed bottom-0 w-full ">
            <div className={`${style.maxWidth} maxSm:px-4 md:mx-auto flex space-x-8 mt-4`}>
              <p>1 Selected |</p>
              <TrashIcon width="25" height="25" color="#00A3FA" />
              <label
                for="toogleA"
                class="flex items-center cursor-pointer"
              >
                <div class="relative">

                  <input id="toogleA" type="checkbox" className="hidden" onClick={() => handleToggle()} />

                  <div
                    className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                  ></div>

                  <div
                    className={`${style.toggle__dot} absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0`}
                  ></div>
                </div>

                <div
                  class="ml-3 text-gray-700 font-medium"
                >
                </div>
              </label>
            </div>
          </div>
          : <></>
      }
    </div>
  )
}

export default Dashboard;
