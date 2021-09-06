import React from 'react';

import './Techs.css';

export default function Techs() {
  return (
    <section className="technologies">
      <div className="container">
        <h2 className="section-title">
          Технологии
        </h2>
        <div className="technologies__text">
          <h3 className="technologies__title">
            7 технологий
          </h3>
          <p className="technologies__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className="technologies__wrapper">
          <li className="technologies__item">HTML</li>
          <li className="technologies__item">CSS</li>
          <li className="technologies__item">JS</li>
          <li className="technologies__item">React</li>
          <li className="technologies__item">Git</li>
          <li className="technologies__item">Express.js</li>
          <li className="technologies__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
