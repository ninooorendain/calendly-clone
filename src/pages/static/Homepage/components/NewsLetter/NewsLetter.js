import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = ({ isArabic }) => {
  return (
    <>
      {
        isArabic ?
          <div className="md:flex md:justify-center mt-24 max-w-px-810 md:mx-auto md:mt-32">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-lg px-4 font-semibold text-secondary-500 md:px-0 md:text-3xl" lang="ar" dir="rtl">
                يساعدك الودي على جدولة الاجتماعات بدون رسائل البريد الإلكتروني ذهابًا وإيابًا
               </h2>
              <Link to="/signup"><button className="bg-primary-500 mt-8 text-white py-4 px-8 rounded-md md:hidden">ابدأ مجانًا</button></Link>
              <div className="maxSm:hidden md:mt-8 relative">
                <input type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="block w-full py-3 px-2 mt-0.5 text-gray-800 appearance-none border-2 border-primary-500 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <Link to="/signup" className="absolute right-0 top-0 bg-primary-500 py-3.5 px-6 rounded-r-lg  text-white">اشتراك</Link>
              </div>
              <p className="font-light text-sm mt-4 md:text-md md:text-center" lang="ar"><span>ابدأ مجانًا. </span>بطاقة الإئتمان غير مطالب بها.</p>
            </div>
            <div className="maxSm:hidden md:w-1/2">
              <img src="/images/image.png" />
            </div>
          </div>
          : <div className="md:flex md:justify-center mt-24 max-w-px-810 md:mx-auto md:mt-32">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-lg px-4 font-semibold text-secondary-500 md:px-0 md:text-3xl">
                Plotsy helps you schedule meetings without the back-and-forth-emails
               </h2>
              <Link to="/signup"><button className="bg-primary-500 mt-8 text-white py-4 px-8 rounded-md md:hidden">Get Started For Free</button></Link>
              <div className="maxSm:hidden md:mt-8 relative">
                <input type="email"
                  placeholder="Enter your email"
                  className="block w-full py-3 px-2 mt-0.5 text-gray-800 appearance-none border-2 border-primary-500 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <Link to="/signup" className="absolute right-0 top-0 bg-primary-500 py-3.5 px-6 rounded-r-lg  text-white">Sign up</Link>
              </div>
              <p className="font-light text-sm mt-4 md:text-md md:text-center"><span>Get started for free. </span>No credit card required.</p>
            </div>
            <div className="maxSm:hidden md:w-1/2">
              <img src="/images/image.png" />
            </div>
          </div>
      }
    </>
  )
}

export default NewsLetter;
