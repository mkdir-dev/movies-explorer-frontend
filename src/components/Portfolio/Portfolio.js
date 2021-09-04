import React from 'react';

import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <nav className="portfolio__navigation">
          <ul className="portfolio__projects">

            <li className="portfolio__projects-item">
              <a
                className="portfolio__link"
                href="https://mkdir-dev.github.io/how-to-learn/"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
              </a>
            </li>

            <li className="portfolio__projects-item">
              <a
                className="portfolio__link"
                href="https://mkdir-dev.github.io/russian-travel/"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
              </a>
            </li>

            <li className="portfolio__projects-item">
              <a
                className="portfolio__link"
                href="https://mkdir-dev.github.io/mesto/"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </section>
  );
}
