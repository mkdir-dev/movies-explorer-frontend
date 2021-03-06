/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './MenuBurger.css';

export default function MenuBurger({ activeBurger, setActiveBurger }) {
  const location = useLocation();
  // убрать меню-бургер при нажатии
  const handleClick = () => {
    setActiveBurger(false);
  };

  // убрать возможность нажатия на фон
  const handleNotClick = (evt) => {
    evt.stopPropagation();
  };

  return (
    <nav
      className={activeBurger ? 'menu-burger_active' : 'menu-burger'}
      onClick={handleClick}
    >
      <ul
        className="menu-burger__list"
        onClick={handleNotClick}
      >
        <li className="menu-burger__item">
          <Link
            className={`
              menu-burger__link
              ${location.pathname === '/' ? 'menu-burger__link_active' : ''}
            `}
            to="/"
            onClick={handleClick}
          >
            Главная
          </Link>
        </li>
        <li className="menu-burger__item">
          <Link
            className={`
              menu-burger__link
              ${location.pathname === '/movies' ? 'menu-burger__link_active' : ''}
            `}
            to="/movies"
            onClick={handleClick}
          >
            Фильмы
          </Link>
        </li>
        <li className="menu-burger__item">
          <Link
            className={`
              menu-burger__link
              ${location.pathname === '/saved-movies' ? 'menu-burger__link_active' : ''}
            `}
            to="/saved-movies"
            onClick={handleClick}
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li className="menu-burger__item_type_profile">
          <Link
            className={`
            menu-burger__link_type_profile
              ${location.pathname === '/profile' ? 'menu-burger__link_type_profile-active' : ''}
            `}
            to="/profile"
            onClick={handleClick}
          >
            Аккаунт
          </Link>
        </li>
        <li className="menu-burger__item_type_button-close">
          <button
            className="menu-burger__link_type_button-close"
            type="button"
            aria-label="Закрыть"
            onClick={handleClick}
          />
        </li>
      </ul>
    </nav>
  );
}
