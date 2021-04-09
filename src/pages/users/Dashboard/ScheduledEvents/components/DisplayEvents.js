import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsIcon from '../../../../../shared/icons/DetailsIcon';
import style from '../../Dashboard.module.css'
import Modal from './Modal';

const DisplayEvents = () => {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal);
  const toggle = () => setShowAdditionalDetails(!showAdditionalDetails);
  return (
    <div>
      <div className={`md:flex cursor-pointer maxSm:relative ${style.hoverContainer}`} onClick={() => toggle()}>
        <div className="md:flex md:flex-wrap md:space-x-4 py-6 px-4">
          <p className="w-8 h-8 rounded-full bg-primary-500"></p>
          <p className="mt-1.5">9:00 - 9:30</p>
        </div>
        <div className="md:flex-1 md:ml-36 md:py-6">
          <p className="font-semibold">Nino Orendain</p>
          <p className="flex">Event type <span className="font-semibold ml-2">30 Minute Meeting</span></p>
        </div>
        <div className="md:flex-1 text-right flex absolute maxSm:top-4 right-8 md:space-x-4 md:py-6 md:px-4">
          <p className="mt-1 -end"> <DetailsIcon /></p>
          <p className="text-secondary-200">Details</p>
        </div>
      </div>
      {
        showAdditionalDetails
          ? <div className="md:flex md:px-4 md:space-x-8 maxSm:mt-4">
            <div className="pl-8 flex flex-col space-y-4 flex-wrap">
              <Link to="/meeting-calendar"><button className="border py-3 pl-6 w-48 text-left border-secondary-500 rounded-md text-sm">
                Reschedule
              </button></Link>
              <button className="border py-3 pl-6 w-48 text-left border-secondary-500 rounded-md text-sm" onClick={() => toggleModal()}>
                Cancel
              </button>
              <hr />
            </div>
            <div className="pl-8 flex flex-col space-y-6 flex-1 text-sm">
              <hr />
              <div>
                <p className="font-semibold">EMAIL</p>
                <p>ninomasbang@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">LOCATION</p>
                <p>No Location Given</p>
              </div>
              <div>
                <p className="font-semibold">INVITEE TIMEZONE</p>
                <p>Taipei Time</p>
              </div>
              <div>
                <p className="font-semibold">QUESTIONS</p>
                <p>Please share anything that will help prepare for our meeting.</p>
              </div>
              <div>
                <p className="text-secondary-200">Created April 1,2020</p>
              </div>

            </div>
          </div>
          : <></>

      }
      <Modal isShowModal={showModal} handleClose={() => setShowModal(false)} />
    </div>
  )
}

export default DisplayEvents;
