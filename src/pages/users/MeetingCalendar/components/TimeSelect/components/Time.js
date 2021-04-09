import React, { createRef, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import Troubleshoot from '../../../../../../shared/icons/Troubleshoot.js';
import data from './data.js'
import style from './Time.module.css';


const Time = ({ innerClass = '', is60Mins, is30Mins, is15Mins }) => {
  const [showButtons, setShowButtons] = useState([]);
  const elementRef = useRef();
  const toggleTime = (idx) => {
    setShowButtons([idx])
  }
  const handleDisplay = () => {
    if (is30Mins) {
      return data['thirtyMins'].map((item, index) => (
        <div className="mx-4" key={index}>
          {
            showButtons.includes(index) ?
              <div className={`flex space-x-4 text-white`}>
                <button className="flex-1 bg-secondary-50 py-3 rounded-md">{item}</button>
                <Link to="/user/make-event" className="flex-1 bg-primary-500 py-3 rounded-md"><button>Confirm</button></Link>
              </div>
              :
              <button
                className={`border border-primary-500 w-full py-3 rounded-md text-primary-500 font-bold focus:outline-none`}
                ref={elementRef}
                onClick={() => toggleTime(index)}
              >
                {item}
              </button>
          }
        </div>
      ))
    } else if (is60Mins) {
      return data['sixtyMins'].map((item, index) => (
        <div className="mx-4" key={index}>
          {
            showButtons.includes(index) ?
              <div className={`flex space-x-4 text-white`}>
                <button className="flex-1 bg-secondary-50 py-3 rounded-md">{item}</button>
                <Link to="/user/make-event" className="flex-1 bg-primary-500 py-3 rounded-md"><button>Confirm</button></Link>
              </div>
              :
              <button
                className={`border border-primary-500 w-full py-3 rounded-md text-primary-500 font-bold focus:outline-none`}
                ref={elementRef}
                onClick={() => toggleTime(index)}
              >
                {item}
              </button>
          }
        </div>
      ))
    } else if (is15Mins) {
      return data['fifteenMins'].map((item, index) => (
        <div className="mx-4" key={index}>
          {
            showButtons.includes(index) ?
              <div className={`flex space-x-4 text-white`}>
                <button className="flex-1 bg-secondary-50 py-3 rounded-md">{item}</button>
                <Link to="/user/make-event" className="flex-1 bg-primary-500 py-3 rounded-md"><button>Confirm</button></Link>
              </div>
              :
              <button
                className={`border border-primary-500 w-full py-3 rounded-md text-primary-500 font-bold focus:outline-none`}
                ref={elementRef}
                onClick={() => toggleTime(index)}
              >
                {item}
              </button>
          }
        </div>
      ))
  }
  }
  return (
    <div>

      <h1 className="font-semibold mt-8 text-2xl md:hidden">Select a Time</h1>
      <p className="text-sm my-4 md:hidden">Duration : 30 min</p>
      <div className={`space-y-4 ${innerClass}`}>
        {
          handleDisplay()
        }
      </div>
    </div>
  );
}

export default Time;