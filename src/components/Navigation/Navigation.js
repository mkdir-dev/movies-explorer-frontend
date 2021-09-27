import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';
import MenuBurger from '../MenuBurger/MenuBurger';

// eslint-disable-next-line react/prop-types
export default function Navigation({ loggedIn }) {
  const location = useLocation();
  // сменить состояние навигационного меню-бургер
  const [activedMenuBurger, setActivedMenuBurger] = React.useState(false);

  // открыть меню при нажатии
  const handleClick = () => {
    setActivedMenuBurger(true);
  };

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
            className={`
                navigation__link navigation__link_type_movies
                ${location.pathname === '/movies' ? 'navigation__link_active' : ''}
            `}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className={`
            navigation__link navigation__link_type_movies
              ${location.pathname === '/saved-movies' ? 'navigation__link_active' : ''}
            `}
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          className={`
            navigation__link_type_profile
            ${location.pathname === '/profile' ? 'navigation__link_type_profile-active' : ''}
          `}
          to="/profile"
        >
          Аккаунт
        </Link>
        <button
          className="navigation__button-burger"
          type="button"
          aria-label="button-burger"
          onClick={handleClick}
        />
        <MenuBurger
          activeBurger={activedMenuBurger}
          setActiveBurger={setActivedMenuBurger}
        />
      </div>
    </ul>
  );
}
