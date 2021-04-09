import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Chevron from '../../../../shared/icons/Chevron';

import style from './InputField.module.css'
const InputField = ({ title, buttonText, children, isArabic, changeEng, changeAr, isVendorDetails, handleClick }) => {
    const history = useHistory();
    return (
      <div className={`flex flex-col mx-auto mt-16 ${style.formContainer}`}>
        <p className="text-center font-bold text-5xl border w-32  mx-auto border-primary-500">P</p>
          <h2 className="mt-8 text-xl font-light text-center">{title}</h2>
          <div className="border mx-4 mt-8 px-4 py-8">
          <p className="text-sm font-light">{isArabic ? 'أدخل عنوان بريدك الالكتروني' : 'Enter your email-address'}</p>
          <input type="email"
            placeholder={isArabic ? 'عنوان بريد الكتروني' : 'email address'}
            className="block w-full py-3 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
            required
          />
          {
            isVendorDetails &&
            <>
              <p className="text-sm font-light mt-6">{isArabic ? 'أدخل اسمك الكامل' : 'Enter your business name (optional)'}</p>
              <input type="text"
                placeholder={isArabic ? 'الاسم التجاري' : 'Business Name'}
                className="block w-full py-3 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
              />
              <p className="text-sm font-light mt-6">{isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}</p>
              <input type="text"
                placeholder={isArabic ? 'فلان الفلاني' : 'John Doe'}
                className="block w-full py-3 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
                required
              />
              <p className="text-sm font-light mt-6">{isArabic ? 'اختر كلمة مرور مكونة من 8 أحرف على الأقل' : 'Choose a password at least 8 characters'}</p>
              <input type="password"
                placeholder={isArabic ? 'كلمه السر' : 'password'}
                className="block w-full py-3 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
                required
              />
            </>
          }
          <button className={`mt-8 bg-primary-500 text-white p-3`} type="submit" onClick={handleClick}>
            {buttonText}
          </button>
          {children}
        </div>
        <p className="text-center text-primary-500 mt-8 flex mx-auto cursor-pointer" onClick={isArabic ? () => history.push(changeEng) : () => history.push(changeAr)}>{isArabic ? 'English' : 'Arabic'} <span className="ml-2 mt-0.5"><Chevron /></span></p>
        </div>
    );
}

export default InputField;
