import React from 'react';
import Calendar from '../../../../../shared/icons/Calendar.js';

const Features = ({ isArabic }) => {
  return (
    <>
      { isArabic
        ? <div className="md:mx-auto">
          <div className="mx-8 text-center">
            <h1 className="text-xl font-bold my-8 md:text-4xl md:my-16"> الميزات التي سيستمتع بها الجميع </h1>
            <img src="/images/image4.png" className="md:hidden" />
            <img src="/images/image5.png" />
          </div>
          <div className="mx-4 md:flex md:space-x-32">
            <div className="mt-8 ">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">تكامل التقويم</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">يعمل مع تقويم Google أو Outlook أو Office 365 أو iCloud حتى لا تحجز مرتين أبدًا</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">مراقبة</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">عيِّن أوقاتًا مؤقتة بين الاجتماعات ، وامنع اجتماع اللحظة الأخيرة ، وأنشئ أنواع أحداث سرية والمزيد</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">مرن</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">يدعم اجتماعات فردية على واحد ، وروبن مستدير ، واجتماعات إتاحة جماعية</p>
            </div>
          </div>

          <div className="mx-4  md:mt-8 maxSm:hidden md:flex md:space-x-32">
            <div className="mt-8 ">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">المنطقة الزمنية ذكي</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">اكتشاف المنطقة الزمنية بسلاسة للمدعوين بحيث يكون الجميع في نفس الصفحة</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">يعمل مع تطبيقاتك</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">أتمتة المهام باستخدام Salesforce و GoToMeeting و Zapier والمزيد</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">ينمو مع فريقك</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">يعمل بشكل رائع للأفراد والفرق والإدارات</p>
            </div>
          </div>
          {/* <h2 className="text-primary-500 text-lg text-center mt-12">Learn more about features</h2> */}
        </div>
        : <div className="md:mx-auto">
          <div className="mx-8 text-center">
            <h1 className="text-xl font-bold my-8 md:text-4xl md:my-16"> Features that everyone will enjoy </h1>
            <img src="/images/image4.png" className="md:hidden" />
            <img src="/images/image5.png" />
          </div>
          <div className="mx-4 md:flex md:space-x-32">
            <div className="mt-8 ">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">Calendar Integration</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">Works with your Google, Outlook, Office 365 or iCloud calendar so you're never double booked</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">Control</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">Set buffer times between meetings, prevent last minute meeting, create secret event types and more</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">Flexible</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">Supports 1-on-1, round robin and collective availability meetings</p>
            </div>
          </div>

          <div className="mx-4  md:mt-8 maxSm:hidden md:flex md:space-x-32">
            <div className="mt-8 ">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">Timezone Intelligent</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">Seamless timezone detection for your invitees so everyone’s on the same page</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">Works with your apps</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">Automate tasks with Salesforce, GoToMeeting, Zapier and more</p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Calendar />
                <p className="ml-2 font-semibold text-lg">Grows with your team</p>
              </div>
              <p className="font-light mt-6 text-lg md:w-56 text-secondary-200">Works great for individuals, teams and departments</p>
            </div>
          </div>
          {/* <h2 className="text-primary-500 text-lg text-center mt-12">Learn more about features</h2> */}
        </div>
      }
    </>
  );
}

export default Features;