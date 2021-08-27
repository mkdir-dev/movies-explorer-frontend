import React from 'react';

import './Promo.css';

import NavTab from '../NavTab/NavTab';

import logo from '../../images/promo-logo.png';

export default function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__info">
            <h1 className='promo__title'>
              Учебный проект студента факультета
              Веб-разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <NavTab />
          </div>
          <img
            src={logo}
            alt="Логотип"
            className="promo__logo"
          />
        </div>
      </div>
    </section>
  );
}
