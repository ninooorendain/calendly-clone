import React from 'react';
import { Link } from 'react-router-dom';
import ArrowCircleDown from '../../../../shared/icons/ArrowCircleDown';
import FilterIcon from '../../../../shared/icons/FilterIcon';
import Header from '../../components/Header';
import Subheader from '../components/Subheader';
import style from '../Dashboard.module.css';
import DisplayEvents from './components/DisplayEvents';

const ScheduleEvents = () => {
  return (
    <div>
      <Header isNotFixed />
      <Subheader isActive2 />
      <div className="bg-primary-100 md:h-screen pt-8">
        <div className={` md:mx-auto text-right mb-8 text-secondary-200 ${style.maxWidth}`}>
          <p>Display 1 of 1 Events</p>
          <Link to="/dashboard/schedule_events/ar"><button className="border border-primary-500 text-primary-500 px-4 py-2 mt-4">Change Arabic</button></Link>
        </div>
        <div className={`md:mx-auto ${style.maxWidth} py-6 maxSm:px-4 bg-white md:relative shadow-md rounded-md`}>
          <div className="md:px-6 md:flex">
            <ul className="flex  flex-1 space-x-8">
              <li>Upcoming</li>
              <li>Pending</li>
              <li>Past</li>
              <li>Date Range</li>
            </ul>
            <div className="flex md:absolute md:right-4 flex-1 mt-1.5 md:space-x-8 text-secondary-200">
              <div className="flex maxSm:flex-1">
                <div className="mt-0.5 mr-1">
                  <span><FilterIcon width="18" height="18" /></span>
                </div>
                <p>Filter</p>
              </div>
              <div className="maxSm:flex-1">
                <p>|</p>
              </div>
              <div className="flex maxSm:flex-1">
                <div className="mt-0.5 mr-1">
                  <span><ArrowCircleDown width="18" height="18" /></span>
                </div>
                <p>Export</p>
              </div>
            </div>
          </div>
          <div className="px-4 mt-4 border-t border-b py-4 bg-primary-100">
            <p>Friday, 30 April 2021</p>
          </div>
          <div>
            <DisplayEvents />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleEvents;