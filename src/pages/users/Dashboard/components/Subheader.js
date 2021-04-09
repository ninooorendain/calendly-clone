import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChevronDown from '../../../../shared/icons/ChevronDown';
import style from '../Dashboard.module.css'

const Subheader = ({ isActive, isActive2, isArabic }) => {
  const [showCreate, setShowCreate] = useState(false)
  const handleCreate = () => {
    setShowCreate(!showCreate)
  }
  return (
    <div className={`bg-white pt-8 shadow-md maxSm:px-4`}>
      <div className={`md:mx-auto ${style.maxWidth}`}>
        <div className={` md:flex`}>
          <div className="flex flex-1">
            <h1 className="text-2xl">My Plotsy</h1>
          </div>
          <div className="flex-1 text-right relative">
            <button className="bg-primary-500 text-white py-3 px-5 text-sm rounded-md" onClick={() => handleCreate()}>+ {isArabic ? 'خلق' : 'Create'}</button>
            {
              showCreate &&
              <div className="bg-white p-4 mt-2 border shadow-md rounded-md float-right absolute z-10 right-0 text-left">
                <ul className="space-y-4 w-80">
                  <li className="flex flex-col">{isArabic ? 'نوع الحدث' : 'Event Type'}
                    <span className="text-sm text-secondary-200">
                      {
                        isArabic ? 'قم بإنشاء القالب الخاص بك لجدول منتظم لحدث'
                          : 'Create your own template for regular schedule event'
                      }
                    </span>
                  </li>
                  <li className="flex flex-col"> {isArabic ? 'اجتماع لمرة واحدة' : 'One-off Meeting'}
                    <span className="text-sm text-secondary-200">
                      {
                        isArabic ? 'قم بإنشاء القالب الخاص بك لجدول منتظم لحدث'
                          : 'Create your own template for regular schedule event'
                      }
                    </span>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
        <div className={`mt-4 ${style.maxWidth}`}>
          <ul className="flex space-x-8">
            <Link to="/dashboard"><li>{isArabic ? 'نوع الحدث' : 'Event Type'} {isActive && <hr className="border-b-2 border-separate border-primary-500 mt-2" />}</li></Link>
          <Link to={isArabic ? '/dashboard/schedule_events/ar' : '/dashboard/schedule_events'}>{isArabic ? 'جدولة الأحداث' : 'Schedule Events'}{isActive2 && <hr className="border-b-2 border-separate border-primary-500 mt-2" />}<li></li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Subheader;