import React from 'react';
import styles from './TimeSlotCard.module.css'

const DayListsEnd = ({ isDay, index }) => {
  const border = 'border-gray-200 border-t border-b border-r flex-1';

  return (
    <div>
      <div className={`flex ${styles.objectiveList}`}>
        <div className={`${border} border ${styles.border1} ${styles.box}`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText1}`}>Sun</p>
        </div>
        <div className={`${border} ${styles.box}`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}> Mon</p>
        </div>
        <div className={`${border} ${styles.box}`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}> Tue</p>
        </div>
        <div className={`${border} ${styles.box}`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}> Wed</p>
        </div>
        <div className={`${border} ${styles.box}`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}> Thurs</p>
        </div>
        <div className={`${border} ${styles.box} maxSm:hidden`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}> Fri</p>
        </div>
        <div className={`${border} ${styles.box} maxSm:hidden`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`endDays${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}>Sat<br />
          </p>
        </div>
      </div>
      <div className="md:hidden maxSm:flex">
        <div className={`${border} ${styles.box} maxSm:border`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`days${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}> Fri</p>
        </div>
        <div className={`${border} ${styles.box}`}>
          <input type={isDay ? 'radio' : 'checkbox'} name={`days${index}`} />
          <p key="goal1" className={`text-xs text-secondary-400 ${styles.listText2}`}>Sat<br />
          </p>
        </div>
      </div>
    </div>
  );
};



export default DayListsEnd;