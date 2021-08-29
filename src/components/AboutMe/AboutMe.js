import React from 'react';

import './AboutMe.css';
// import photo from '../../images/photo.png';
import photo from '../../images/HxmhP5CXYB8.jpg';

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="container">
        <h2 className="section-title">
          Студент
        </h2>
        <div className="about-me__container">
          <article className="about-me__wrapper">
            <div className="about-me__info">
              <h3 className="about-me__title">
                Миша
              </h3>
              <p className="about-me__subtitle">
                Front-end developer, 30 годиков
              </p>
              <p className="about-me__text">
                Я родился в г. Каменске-Уральском, Свердловской обл., живу в Екатеринбурге.
                У меня есть жена и котя. Я люблю котю. И мы с ней так породнились,
                что теперь нас не отличить.
              </p>
            </div>
            <ul className="about-me__social-links">
              <li className="about-me__links-item">
                <a
                  className="about-me__link"
                  href="https://github.com/mkdir-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="about-me__links-item">
                <a
                  className="about-me__link"
                  href="https://www.linkedin.com/in/mkdir-dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="about-me__links-item">
                <a
                  className="about-me__link"
                  href="https://t.me/mkdir_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className="about-me__links-item">
                <a
                  className="about-me__link"
                  href="https://www.facebook.com/mkdir.developer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </article>
          <img src={photo} alt="" className="about-me__photo" />
        </div>
      </div>
    </section>
  );
}
