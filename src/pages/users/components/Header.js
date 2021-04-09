import React, { useState } from 'react';
import CheckIcon from '../../../shared/icons/CheckIcon';
import Close from '../../../shared/icons/Close';
import Menu from '../../../shared/icons/Menu';
import Notification from '../../../shared/icons/Notification';
import Navbar from '../../../shared/Navbar/Navbar';
import NavItem from '../../../shared/NavItem/NavItem';
import style from './Header.module.css'

const Header = ({ className = '' }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const showNotification = () => {
    setShowNotif(!showNotif)
  }
  return (
    <div className={`md:flex md:flex-col md:justify-center md:mx-auto maxSm:justify-start bg-primary-200 h-20`}>
      <Navbar ulClass={showMenu ? 'flex  maxSm:flex maxSm:justify-start maxSm:flex-col md:space-x-2 maxSm:space-y-4' : `flex md:ml-96 ${className}`} isNotFixed>
        <NavItem link="/dashboard"><p className={`${style.logo} maxSm:flex-1 text-3xl`} >Plotsy</p></NavItem>
        <div className="maxSm:hidden flex mt-6 ml-80">
          <NavItem link="#"> Home</NavItem>
          <NavItem link="/availability/schedule"> Availability</NavItem>
          <NavItem link="/user/billing"> Billing</NavItem>
          <NavItem link="/setup/timeslot"> Help</NavItem>
          <NavItem link="#"><span onClick={() => showNotification()}> <Notification width="15" height="15" color="#fff" /></span>
            {
              showNotif ? <div className="absolute bg-primary-400 text-secondary-500 shadow-md rounded-md px-4 py-2 z-10">
                <p className="flex space-x-8"><span><CheckIcon width="25" height="25" color="green" /></span>You have new reservation </p>  
              </div>
                : <></>
            }
          </NavItem>
        </div>
        {showMenu ?
          <>
            <div className="mt-1 bg-primary-200 top-10 w-full space-y-4">
              <NavItem link="#"> Home</NavItem>
              <NavItem link="/availability/schedule"> Availability</NavItem>
              <NavItem link="/user/billing"> Billing</NavItem>
              <NavItem link="/setup/timeslot"> Help</NavItem>
              <hr className="text-white" />
            </div>

            <div className="md:hidden absolute right-5 top-1" onClick={() => setShowMenu(false)}>
              <Close color="#666a73" />
            </div>
          </>
          : <div className="md:hidden absolute right-5 top-5" onClick={() => setShowMenu(true)}><p className="md:hidden ml-20"><Menu color="#666a73" /></p></div>
        }
      </Navbar>
    </div>
  );
}

export default Header;