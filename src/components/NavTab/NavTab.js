import React from 'react';
// import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from 'react-scroll';

import './NavTab.css';

export default function NavTab() {
  return (
    <div className="nav-tab">
      <Link
        className="nav-tab__link"
        to="about-project"
        activeClass="active"
        spy
        smooth
        offset={-70}
        duration={500}
      >
        Узнать больше
      </Link>
    </div>
  );
}
