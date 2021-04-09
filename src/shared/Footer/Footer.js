import React from 'react';
import FooterDesktop from './components/FooterDesktop.js';

import FooterMobile from './components/FooterMobile.js';

const Footer = ({ isArabic }) => {
  return (
    <>
      <hr className="mt-6" />
      {
        isArabic ? <div>
          <div className="md:hidden">
            <FooterMobile isFooterArabic />
          </div>
          <div className="maxSm:hidden">
            <FooterDesktop isFooterArabic />
          </div>
          <div className="bg-secondary-300 px-8 text-center md:text-left mt-8 py-4 md:w-full">
            <div className="md:max-w-px-862 mx-auto">
              <div className="md:flex md:mt-6">
                <p className="font-bold text-xs md:text-secondary-200">&copy; 2021 ودية</p>
                <p className="text-sm m-6 text-secondary-200 md:m-0  md:ml-2">نحن نبتعد عن التواصل مع الآخرين حتى تتمكن من إنجاز المزيد.</p>
              </div>
              <div className="flex space-x-4 text-secondary-200 justify-center md:justify-start text-sm md:mt-6">
                <p>خصوصية</p>
                <p>شروط</p>
              </div>
            </div>
          </div>
        </div>
          : <div>
            <div className="md:hidden">
              <FooterMobile />
            </div>
            <div className="maxSm:hidden">
              <FooterDesktop />
            </div>
            <div className="bg-secondary-300 px-8 text-center md:text-left mt-8 py-4 md:w-full">
              <div className="md:max-w-px-862 mx-auto">
                <div className="md:flex md:mt-6">
                  <p className="font-bold text-xs md:text-secondary-200">&copy; 2021 Plotsy</p>
                  <p className="text-sm m-6 text-secondary-200 md:m-0  md:ml-2">We take the work out of connecting with others so you can accomplish more.</p>
                </div>
                <div className="flex space-x-4 text-secondary-200 justify-center md:justify-start text-sm md:mt-6">
                  <p>Privacy</p>
                  <p>Terms</p>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Footer;