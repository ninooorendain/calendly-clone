import React from 'react';
import Chevron from '../../../../../shared/icons/Chevron';

const Timezone = ({ onClick, isCentered }) => {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let options = {
    timeZone: timeZone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  let formatter = new Intl.DateTimeFormat([], options);
  return (
    <div className={`mx-4 flex ${isCentered ? 'justify-center' : ''}`} onClick={onClick}>
      <p className="text-sm text-secondary-200 font-semibold focus:bg-primary-400">{`${timeZone} ${formatter.format(new Date())}`}</p> <span className="mt-0.5 ml-1"><Chevron width="15" height="15" color="#b3b5ba" /></span>
    </div>
  )
};

export default Timezone;