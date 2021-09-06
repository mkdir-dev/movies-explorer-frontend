import React from 'react';

import './Header.css';

import Logotype from '../Logotype/Logotype';
import Navigation from '../Navigation/Navigation';

// eslint-disable-next-line react/prop-types
export default function Header({ headerLocation, backgroundHeader, loggedIn }) {
  return (
    <header
      className={`header
        ${headerLocation ? 'hide-section' : ''}
        ${backgroundHeader ? 'header__main-page' : ''}
      `}
    >
      <div className="container">
        <div className={`header__wpapper
          ${loggedIn ? 'header__wpapper_loggedIn' : ''}`}
        >
          <Logotype />
          <nav className={`header__nav
            ${loggedIn ? 'header__nav_width' : ''}`}
          >
            <Navigation
              loggedIn={loggedIn}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
