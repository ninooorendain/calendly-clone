import React, { useState } from 'react';

import Navbar from '../../../shared/Navbar';
import NavItem from '../../../shared/NavItem';
import Footer from '../../../shared/Footer';
import Features from './components/Features/';
import NewsLetter from './components/NewsLetter';
import Partners from './components/Partners'
import Work from './components/Work';

import style from './Homepage.module.css'
import Close from '../../../shared/icons/Close';
import Menu from '../../../shared/icons/Menu';

const Homepage = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={`md:flex md:flex-col md:justify-center md:mx-auto maxSm:justify-start ${style.maxWidth}`}>
        <Navbar ulClass={showMenu ? 'flex  maxSm:flex maxSm:justify-start maxSm:flex-col md:space-x-2 maxSm:space-y-4' : 'flex bg-white'}>
          <NavItem link="/"><p className={`${style.logo} maxSm:flex-1 font-bold text-2xl text-black`} >Plotsy</p></NavItem>
          <div className="maxSm:hidden flex mt-6 ml-80">
            <NavItem link="#"> Features</NavItem>
            <NavItem link="#"> Pricing</NavItem>
            <NavItem link="/signup" isActive> Signup</NavItem>
            <NavItem link="/login" >Login</NavItem>
          </div>
          {showMenu ?
            <>
              <div className="mt-1 bg-secondary-100 top-10 w-full space-y-4">
                <NavItem link="#" innerClass="mt-6"> Features</NavItem>
                <NavItem link="#"> Pricing</NavItem>
                <NavItem link="/signup"> Signup</NavItem>
                <NavItem link="/login">Login</NavItem>
                <hr className="text-white" />
              </div>
              <div className="md:hidden absolute right-5 top-1" onClick={() => setShowMenu(false)}>
                <Close color="#666a73" />
              </div>
            </>
            : <div className="md:hidden absolute right-5 top-5" onClick={() => setShowMenu(true)}><p className="md:hidden ml-20"><Menu color="#666a73" /></p></div>
          }
      </Navbar>
      <NewsLetter />
        <div className="bg-primary-400 mx-6 p-6 mt-8 md:flex md:space-x-8 md:p-12">
          <div>
            <p className="text-xl font-semibold text-secondary-500 md:text-2xl md:mt-16">Watch our video</p>
            <p className="text-md text-secondary-400 mt-4">
              We take the work out of connecting with others so you an accomplish more. Learn how painless scheduling can be with Calendly.
            </p>
          </div>
          <div className="shadow-lg relative" >
            <div>
            </div>
            <div className="mt-6">
              <div
                style={{
                  height: '38px',
                  position: 'absolute',
                  width: '60px',
                  zIndex: '1',
                  backgroundColor: 'rgba(84,187,255,0.76)',
                  left: '130px',
                  top: '71px',
                  transition: 'all 80ms ease-out 0s',
                  mixBlendMode: 'normal',
                }}
              >
              </div>
              <div
                style={{
                  background: 'url(/images/play.png) 0px 0px / 60px 38px no-repeat',
                  cursor: 'pointer',
                  display: 'block',
                  height: '38px',
                  outline: 'none',
                  position: 'absolute',
                  width: '60px',
                  zIndex: '1',
                  left: '130px',
                  top: '71px'
                }}
              >
              </div>
              <img src="https://embed-fastly.wistia.com/deliveries/d09176d2d1963d885e7918ed2a4f3f6435fc64d4.jpg?image_crop_resized=960x540" className={`maxSm:mx-auto ${style.playImage}`} />
            </div>
        </div>
      </div>
      <Work />
      <Features />
      <Partners />
      </div>
      <Footer />
    </>
  )
}

export default Homepage;