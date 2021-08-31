import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

// eslint-disable-next-line react/prop-types
export default function Navigation({ loggedIn }) {
  return (
    <ul className="navigation">
      <li className={`${loggedIn ? 'hide-section' : 'navigation__item'}`}>
        <Link
          className="navigation__link navigation__link_type_signup"
          to="/signup"
        >
          Регистрация
        </Link>
      </li>
      <li className={`${loggedIn ? 'hide-section' : 'navigation__item'}`}>
        <Link
          className="navigation__link navigation__link_type_signin"
          to="/signin"
        >
          Вход
        </Link>
      </li>

      <div className={`${loggedIn ? 'navigation__wrapper' : 'hide-section'}`}>
        <div className="navigation__links-movies">
          <Link
            className="navigation__link navigation__link_type_movies navigation__link_active"
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className="navigation__link navigation__link_type_movies"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          className="navigation__link_type_profile"
          to="/profile"
        >
          Аккаунт
        </Link>
        <button className="navigation__button-burger" type="button" aria-label="asd" />
      </div>
    </ul>
  );
}
