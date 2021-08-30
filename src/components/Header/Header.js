import React from 'react';

import './Header.css';

import Logotype from '../Logotype/Logotype';
import Navigation from '../Navigation/Navigation';

// eslint-disable-next-line react/prop-types
export default function Header({ pageLocation }) {
  return (
    <header className={` ${pageLocation ? 'hide-section' : 'header'} `}>
      <div className="container">
        <div className="header__wpapper">
          <Logotype />
          <nav className="header__nav">
            <Navigation />
          </nav>
        </div>
      </div>
    </header>
  );
}
