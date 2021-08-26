import './Header.css';
import { Link } from 'react-router-dom'

import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className="header container">
      <Link
        className="header__logo"
        to="/"
      >
      </Link>
      <nav className='header__nav' >
        <Navigation />
      </nav>
    </header>
  );
};