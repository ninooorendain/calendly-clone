import React from 'react';

import styles from './Loading.module.css';

const Loading = ({ className, iconClass, position, height }) => {
  return (
    <div className={`absolute grid place-items-center ${height} w-full z-50 ${className}`}>
      <div className={`${styles.loader} ${position}`}>
        <span className={iconClass}></span>
        <span className={iconClass}></span>
        <span className={iconClass}></span>
        <span className={iconClass}></span>
        <span className={iconClass}></span>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  className: 'bg-primary-500',
  iconClass: 'bg-basic-400 text-basic-400',
  position: 'top-1/2',
  height: 'h-full',
};

export default Loading;
