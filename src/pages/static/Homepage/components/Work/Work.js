import React from 'react';

import style from './Work.module.css';

const Work = ({ isArabic }) => {
  return (
    <>
      {
        isArabic
          ? <div className="text-center md:text-left mx-6 md:flex flex-col justify-center md:mx-auto md:mt-16">
            <h1 className="text-xl mt-8 font-bold md:text-center md:text-4xl">كيف تعمل</h1>
            <div className="mt-8 md:flex">
              <h2 className="font-semibold md:hidden">Create simple rules</h2>
              <img src="/images/image1.png" className={`mt-4  maxSm:mx-auto ${style.image}`} />
              <div>
                <h2 className={`font-semibold ${style.desktopDisplay}`}>ضع قواعد بسيطة</h2>
                <p className="font-light text-lg text-secondary-200 md:w-96">
                  الإعداد سهل. اسمح لـ Cal Friendly بمعرفة تفضيلات التوفر لديك وستقوم بالعمل نيابةً عنك.
                </p>
              </div>
            </div>
            <div className="mt-8 md:flex">
              <h2 className="font-semibold md:hidden">Share your link</h2>
              <img src="/images/image2.png" className={`mt-4 maxSm:mx-auto ${style.image}`} />
              <div>
                <h2 className={`font-semibold ${style.desktopDisplay}`}>شارك الرابط الخاص بك</h2>
                <p className="font-light text-lg md:w-96 text-secondary-200">
                  شارك روابطك الودية عبر البريد الإلكتروني أو قم بتضمينها على موقع الويب الخاص بك.
                </p>
              </div>
            </div>
            <div className="mt-8 md:flex">
              <h2 className="font-semibold md:hidden">جدول</h2>
              <img src="/images/image3.png" className={`mt-4  maxSm:mx-auto ${style.image}`} />
              <div>
                <h2 className={`font-semibold ${style.desktopDisplay}`}>جدول</h2>
                <p className="font-light text-lg md:w-96 text-secondary-200">
                  يختارون الوقت ويتم إضافة الحدث إلى التقويم الخاص بك.
                </p>
              </div>
            </div>
          </div>
          : <div className="text-center md:text-left mx-6 md:flex flex-col justify-center md:mx-auto md:mt-16">
            <h1 className="text-xl mt-8 font-bold md:text-center md:text-4xl">How it works</h1>
            <div className="mt-8 md:flex">
              <h2 className="font-semibold md:hidden">Create simple rules</h2>
              <img src="/images/image1.png" className={`mt-4  maxSm:mx-auto ${style.image}`} />
              <div>
                <h2 className={`font-semibold ${style.desktopDisplay}`}>Create simple rules</h2>
                <p className="font-light text-lg text-secondary-200 md:w-96">
                  Setup is easy. Let Plotsy know your availability preferences and it’ll do the work for you.
                </p>
              </div>
            </div>
            <div className="mt-8 md:flex">
              <h2 className="font-semibold md:hidden">Share your link</h2>
              <img src="/images/image2.png" className={`mt-4 maxSm:mx-auto ${style.image}`} />
              <div>
                <h2 className={`font-semibold ${style.desktopDisplay}`}>Share your link</h2>
                <p className="font-light text-lg md:w-96 text-secondary-200">
                  Share your Plotsy links via email or embed it on your website.
                </p>
              </div>
            </div>
            <div className="mt-8 md:flex">
              <h2 className="font-semibold md:hidden">Schedule</h2>
              <img src="/images/image3.png" className={`mt-4  maxSm:mx-auto ${style.image}`} />
              <div>
                <h2 className={`font-semibold ${style.desktopDisplay}`}>Schedule</h2>
                <p className="font-light text-lg md:w-96 text-secondary-200">
                  They pick a time and the event is added to your calendar.
                </p>
              </div>
            </div>
          </div>

      }
    </>
  )
}

export default Work;