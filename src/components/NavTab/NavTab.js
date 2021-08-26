import './NavTab.css';

import { Link } from 'react-router-dom';

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
};