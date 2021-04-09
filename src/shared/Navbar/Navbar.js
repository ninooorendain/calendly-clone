import React from 'react';

const Navbar = ({ children, ulClass, bgColor, maxWidth, isNotFixed }) => {
  return (
    <div className={`maxSm:border-b pb-4 ${isNotFixed ? '' : 'fixed'} top-0 z-20 w-full ${bgColor} ${maxWidth}`}>
      <nav>
        <ul className={ulClass}>
          {children}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
