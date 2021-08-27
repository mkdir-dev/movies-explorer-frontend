import React from 'react';
import { Link } from 'react-router-dom';

import './NavTab.css';

export default function NavTab() {
  return (
    <div className="nav-tab">
      <Link
        className="nav-tab__link"
        to="/"
      >
        Узнать больше
      </Link>
    </div>
  );
}
