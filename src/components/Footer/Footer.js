import React from 'react';

import './Footer.css';

// eslint-disable-next-line react/prop-types
export default function Footer({ pageLocation }) {
  return (
    <footer className={` ${pageLocation ? 'hide-section' : 'footer'} `}>
      <div className="container">
        <p className="footer__description">Учебный проект х BeatFilm.</p>
        <div className="footer__wrapper">
          <a
            href="https://github.com/mkdir-dev"
            className="footer__link footer__link_author"
            target="_blank"
            rel="noreferrer"
          >
            &copy; 2021. Михаил Корюков
          </a>
          <nav className="footer__navigation">
            <ul className="footer__social-links">
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://github.com/mkdir-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://www.linkedin.com/in/mkdir-dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://t.me/mkdir_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://www.facebook.com/mkdir.developer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
