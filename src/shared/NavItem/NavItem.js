import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ link, isActive, children, innerClass, lang = "en" }) => {
  return (
    <li className={innerClass} lang={lang}>
      <Link
        to={link}
        className={`block px-3.5 md:py-1.5 rounded-sm  ${isActive ? 'bg-primary-500 text-white md:px-4' : 'text-secondary-200'}`}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
