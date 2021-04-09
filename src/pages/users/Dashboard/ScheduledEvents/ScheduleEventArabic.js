import React from 'react';
import { Link } from 'react-router-dom';
import ArrowCircleDown from '../../../../shared/icons/ArrowCircleDown';
import FilterIcon from '../../../../shared/icons/FilterIcon';
import Header from '../../components/Header';
import Subheader from '../components/Subheader';
import style from '../Dashboard.module.css';
import DisplayEvents from './components/DisplayEvents';

const ScheduleEventArabic = () => {
  return (
    <div>
      <Header isNotFixed />
      <Subheader isActive2 isArabic />
      <div className="bg-primary-100 md:h-screen pt-8">
        <div className={` md:mx-auto text-right mb-8 text-secondary-200 ${style.maxWidth}`}>
          <p>عرض 1 من 1 الأحداث</p>
          <Link to="/dashboard/schedule_events"><button className="border border-primary-500 text-primary-500 px-4 py-2 mt-4">Change English</button></Link>
        </div>
        <div className={`md:mx-auto ${style.maxWidth} py-6 maxSm:px-4 bg-white md:relative shadow-md rounded-md`}>
          <div className="md:px-6 md:flex">
            <ul className="flex  flex-1 space-x-8">
              <li>القادمة</li>
              <li>قيد الانتظار</li>
              <li>ماضي</li>
              <li>نطاق الموعد</li>
            </ul>
            <div className="flex md:absolute md:right-4 flex-1 mt-1.5 md:space-x-8 text-secondary-200">
              <div className="flex maxSm:flex-1">
                <div className="mt-0.5 mr-1">
                  <span><FilterIcon width="18" height="18" /></span>
                </div>
                <p>منقي</p>
              </div>
              <div className="maxSm:flex-1">
                <p>|</p>
              </div>
              <div className="flex maxSm:flex-1">
                <div className="mt-0.5 mr-1">
                  <span><ArrowCircleDown width="18" height="18" /></span>
                </div>
                <p>يصدر</p>
              </div>
            </div>
          </div>
          <div className="px-4 mt-4 border-t border-b py-4 bg-primary-100">
            <p>الجمعة 30 أبريل 2021</p>
          </div>
          <div>
            <DisplayEvents />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleEventArabic;