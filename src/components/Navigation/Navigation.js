import './Navigation.css';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className='navigation'>
      <li className="navigation__item">
        <Link
          className="navigation__link navigation__link_type_signup"
          to="/signup"
        >
          Регистрация
        </Link>
      </li>
      <li className="navigation__item">
        <Link
          className="navigation__link navigation__link_type_signin"
          to="/signin"
        >
          Вход
        </Link>
      </li>
    </ul>
  );
};