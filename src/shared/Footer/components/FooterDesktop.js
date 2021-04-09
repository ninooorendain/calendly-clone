import React from 'react';
import Facebook from '../../icons/Facebook.js';
import Twitter from '../../icons/Twitter.js';


const FooterDesktop = ({ isFooterArabic }) => {
  return (
    <>
      <hr />
      {
        isFooterArabic ?
          <div className="flex max-w-px-862 justify-center space-x-16 mx-auto mt-16">
            <div>
              <h2 className="font-semibold text-lg">المنتج</h2>
              <ul className="space-y-1.5 mt-4 text-secondary-200">
                <li>سمات</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg">التسعير</h2>
              <ul className="space-y-1 mt-4 text-secondary-200">
                <li>الخطط</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg">معلومات عنا</h2>
              <ul className="space-y-1.5 mt-4 text-secondary-200">
                <li>المبيعات + التسويق</li>
                <li>تعليم</li>
                <li>جدولة المقابلة</li>
              </ul>
            </div>
          </div>
          : <div className="flex max-w-px-862 justify-center space-x-16 mx-auto mt-16">
            <div>
              <h2 className="font-semibold text-lg">Product</h2>
              <ul className="space-y-1.5 mt-4 text-secondary-200">
                <li>Features</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Pricing</h2>
              <ul className="space-y-1 mt-4 text-secondary-200">
                {/* <li>Sales + Marketing</li>
                <li>Education</li>
                <li>Interview Scheduling</li>
                <li>Customer Success</li>
                <li>Consultants</li>
                <li>Leaders</li> */}
                <li>Plans</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg">About Us</h2>
              <ul className="space-y-1.5 mt-4 text-secondary-200">
                <li>Security</li>
                <li>Location</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* <div>
              <h2 className="font-semibold text-lg">Join us on</h2>
              <div className="flex space-x-2 mt-8">

              </div>
            </div> */}
          </div>
      }
    </>
  );
}

export default FooterDesktop;