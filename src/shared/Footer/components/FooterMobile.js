import React from 'react';
import Facebook from '../../icons/Facebook.js';
import Twitter from '../../icons/Twitter.js';

const FooterMobile = ({ isFooterArabic }) => {
  return (
    <>
      {
        isFooterArabic ?
          <div className="mx-4 mt-8">
            <h2 className="font-semibold text-lg">انضم إلينا</h2>
            <div className="flex space-x-2 mt-8">

            </div>
            <div className="flex mt-8">
              <div className="flex-initial">
                <h2 className="font-semibold text-lg">المنتج</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <h2 className="font-semibold text-lg mt-6">التسعير </h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li>الخطط</li>
                </ul>
                <h2 className="font-semibold text-lg mt-8">موارد</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li>مكتبة الموارد</li>
                </ul>
              </div>
              <div className="flex-1 ml-24">
                <h2 className="font-semibold text-lg">حلول</h2>
                <ul className="space-y-1 mt-4 text-secondary-200">
                  <li>المبيعات + التسويق</li>
                  <li>تعليم</li>
                  <li>جدولة المقابلة</li>
                  <li>نجاح العميل</li>
                  <li>استشاريون</li>
                  <li>القادة</li>
                </ul>
                <h2 className="font-semibold text-lg mt-4">معلومات عنا</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li>المبيعات + التسويق</li>
                  <li>تعليم</li>
                  <li>جدولة المقابلة</li>
                  <li>نجاح العميل</li>
                  <li>استشاريون</li>
                  <li>القادة</li>
                </ul>
              </div>
            </div>
          </div>
          : <div className="mx-4 mt-8">
            <h2 className="font-semibold text-lg">Join us on</h2>
            <div className="flex space-x-2 mt-8">
            </div>
            <div className="flex mt-8">
              <div className="flex-initial">
                <h2 className="font-semibold text-lg">Product</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <h2 className="font-semibold text-lg mt-6">Pricing</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li>Plans</li>
                </ul>
                <h2 className="font-semibold text-lg mt-8">Resources</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li>Resource Library</li>
                  <li>Integrations</li>
                  <li>For Teams</li>
                </ul>
              </div>
              <div className="flex-1 ml-24">
                <h2 className="font-semibold text-lg">Solutions</h2>
                <ul className="space-y-1 mt-4 text-secondary-200">
                  <li>Sales + Marketing</li>
                  <li>Education</li>
                  <li>Interview Scheduling</li>
                  <li>Customer Success</li>
                  <li>Consultants</li>
                  <li>Leaders</li>
                </ul>
                <h2 className="font-semibold text-lg mt-4">About Us</h2>
                <ul className="space-y-1.5 mt-4 text-secondary-200">
                  <li>Sales + Marketing</li>
                  <li>Education</li>
                  <li>Interview Scheduling</li>
                  <li>Customer Success</li>
                  <li>Consultants</li>
                  <li>Leaders</li>
                </ul>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default FooterMobile;