import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wpapper">
          <Link
            className="header__logo"
            to="/"
          >
          </Link>
          <nav className="header__nav" >
            <Navigation />
          </nav>
        </div>
      </div>
    </header>
  );
}
