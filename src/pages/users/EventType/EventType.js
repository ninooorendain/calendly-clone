import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import style from './EventType.module.css'

const EventType = () => {
  return (
    <div>
      <Header isNotFixed />
      <div className={`md:mx-auto ${style.maxWidth} py-8 maxSm:px-4`}>
        <p className="text-center text-2xl font-light mt-4 mb-8">Create New Event Type</p>
        <hr />
        <div className="flex mt-8">
          <div className="flex flex-1">
            <img src="/images/one_on_one.svg" className="flex-wrap" />
            <div className="flex-1 ml-4">
              <h2>One-on-One</h2>
              <p>Let an invitee pick a time to meet with you.</p>
            </div>
          </div>
          <div className="flex-1 text-right">
            <Link to="/user/event-type/solo"><button className="bg-primary-500 text-white py-2 px-4 rounded-md">Create</button> </Link>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="flex flex-1">
            <img src="/images/group.svg" className="flex-wrap" />
            <div className="flex-1 ml-4">
              <h2>Group </h2>
              <p>Let multiple invitees meet with you at one time.</p>
            </div>
          </div>
          <div className="flex-1 text-right">
            <Link to="/user/event-type/group"><button className="bg-primary-500 text-white py-2 px-4 rounded-md">Create</button> </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventType;
