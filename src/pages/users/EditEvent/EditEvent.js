import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../../../shared/icons/Calendar';
import CheckIcon from '../../../shared/icons/CheckIcon';
import ChevronDown from '../../../shared/icons/ChevronDown';
import Cog from '../../../shared/icons/Cog';
import Notification from '../../../shared/icons/Notification';
import Header from '../components/Header';
import EditForm from './components/EditForm';
import EventCard from './components/EventCard';

import style from './EditEvent.module.css';

const EditEvent = () => {
  const [isToggle, setIsToggle] = useState(false)
  const [showCreateEvent, setShowCreateEvent] = useState(false)
  const handleToggle = () => {
    setIsToggle(!isToggle)
  }
  const handleEvent = () => {
    setShowCreateEvent(!showCreateEvent)
  }
  return (
    <div>
      <Header isNotFixed />
      <div className="max-w-px-1120 mx-auto mt-8">
        <div className="flex pb-8">
          <div className="flex-1">
            <button className="border border-primary-500 text-primary-500 py-2 px-6">Back</button>
          </div>
          <div className="flex-1">
            <p className="text-lg text-secondary-200">Edit One-on-One Event Type</p>
          </div>
          <div>
            <p className="flex">Your event type is
              <label
                for="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="relative ml-2">
                  <input id="toogleA" type="checkbox" className="hidden" onClick={() => handleToggle()} />
                  <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div
                    className={`${style.toggle__dot} absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0`}
                  ></div>
                </div>

                <div
                  className="ml-3 text-gray-700 font-medium"
                >
                </div>
              </label></p>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-px-1120 mx-auto mt-8">
        <div className="flex">
          <div className="flex flex-1">
            <p className="text-sm mt-1">Invitee Language</p>
            <span> <ChevronDown color="#00A3FA" /></span>
          </div>
          <Link to="/meeting-calendar">
            <p className="text-right text-sm text-primary-500">View Live Page</p>
          </Link>
        </div>
        <div className="mt-8 space-y-2">
          <EventCard
            titleText="What event is this ?"
            subTitleText="15 Minute Meeting, No location given"
            handleClick={() => handleEvent()}
          >
            {
              showCreateEvent &&
              <EditForm />
            }
          </EventCard>
          <EventCard
            titleText="When can people book this event ?"
            subTitleText="15 min, 60 rolling calendar days"
            icon={<Calendar />}
          />
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-semibold">Additional Options</p>
          <EventCard
            titleText="Invitee Questions"
            subTitleText="Name,Email,+1 questions"
            icon={<Cog color="#b3b5ba" width="25" height="25" />}
          >
          </EventCard>
          <EventCard
            titleText="Notification and Cancellation Policy"
            subTitleText="Calendar Invitations, No Reminders"
            icon={<Notification color="#b3b5ba" width="25" height="25" />}
          >
          </EventCard>
          <EventCard
            titleText="Confirmation Page"
            subTitleText="Plotsy confirmation page, no active links"
            icon={<CheckIcon color="#b3b5ba" width="25" height="25" />}
          >
          </EventCard>
        </div>
      </div>
    </div>
  )
}

export default EditEvent;
