import React from 'react';
import { useHistory } from 'react-router';

import style from './Partners.module.css';

const Partners = ({ isArabic }) => {
  const history = useHistory();

  return (
    <div className="mt-16 text-center">
      {/* <h1 className="font-semibold text-2xl">You're in good company</h1>
      <p className="px-8 mt-8 text-lg font-light">We're already connecting millions of people.</p>
      <div className={`m-8 rounded-md md:rounded-2xl pb-4 ${style.hugeTicker}`}>
        <div>
        </div>
        <div className={`text-secondary-400 font-bold`}>
          <p className={style.numbers}>8,000,000</p>
          <p className="text-xs md:text-lg">Monthly Users</p>
        </div>
      </div>
      <div>
        <h2 className="text-secondary-200 font-semibold">Trusted by</h2>
        <div className="flex justify-center mx-auto">
          <img src="/images/linkendin.png" className={`${style.image}`} />
          <img src="/images/zendesk.png" className={`${style.image}`} />
          <img src="/images/emyth.png" className={`${style.image} maxSm:hidden`} />
          <img src="/images/georgia.png" className={`${style.image} maxSm:hidden`} />
        </div>
        <div className="flex justify-center mx-auto md:hidden">
          <img src="/images/emyth.png" className={`${style.image}`} />
          <img src="/images/georgia.png" className={`${style.image}`} />
        </div>
      </div> */}
      {
        isArabic ? <div className="maxSm:px-12">
          <h1 className="text-2xl text-secondary-500 mt-16 md:hidden">حدد موعدًا لاجتماعك الأول</h1>
          <h1 className="text-3xl text-secondary-500 mt-16 maxSm:hidden">ابدأ اليوم مجانًا</h1>
          <button className="bg-primary-500 mt-8 text-white py-4 px-8 rounded-md md:hidden">ابدأ مجانًا</button>
          <div className="maxSm:hidden md:mt-8 relative mx-auto justify-center">
            <input type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="py-3.5 px-2 mt-0.5 text-gray-800 appearance-none border-2 border-primary-500 rounded-lg mx-auto w-1/2 focus:outline-none focus:border-primary-500"
            />
            <button className="absolute right-60 mr-1.5 top-1 bg-primary-500 py-3.5 px-6 rounded-r-lg text-white">اشتراك</button>
          </div>
          <p className="mt-4 text-xs md:hidden">نسخة تجريبية مجانية لمدة 14 يومًا</p>
          <p className="mt-4 mb-8 text-xs maxSm:hidden">بطاقة الإئتمان غير مطالب بها</p>
        </div>
          : <div className="maxSm:px-12">
            <h1 className="text-2xl text-secondary-500 mt-16 md:hidden">Schedule your first meeting</h1>
            <h1 className="text-3xl text-secondary-500 mt-16 maxSm:hidden">Get Started for free today</h1>
            <button className="bg-primary-500 mt-8 text-white py-4 px-8 rounded-md md:hidden">Get Started For Free</button>
            <div className="maxSm:hidden md:mt-8 relative mx-auto justify-center">
              <input type="email"
                placeholder="Enter your email"
                className="py-3.5 px-2 mt-0.5 text-gray-800 appearance-none border-2 border-primary-500 rounded-lg mx-auto w-1/2 focus:outline-none focus:border-primary-500"
              />
              <button className="absolute right-60 mr-1.5 top-1 bg-primary-500 py-3.5 px-6 rounded-r-lg text-white">Sign up</button>
            </div>
            <p className="mt-4 text-xs md:hidden">Free 14 Day Pro Trial</p>
            <p className="mt-4 mb-8 text-xs maxSm:hidden">No credit card required</p>
          </div>

      }
      <div className={`border w-44 py-2 ${style.containerHover}`}>
        Language
        <ul className={style.hoverize}>
          <li className="mt-2" onClick={() => history.push('/')}>English</li>
          <li onClick={() => history.push('/ar')}>Arabic</li>
        </ul>
      </div>
    </div>
  );
}

export default Partners;
