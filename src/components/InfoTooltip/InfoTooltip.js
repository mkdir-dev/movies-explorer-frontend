/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
import React from 'react';

import './InfoTooltip.css';

export default function InfoTooltip({
  movie, isPopup, onClosePopup,
}) {
  return (
    <div className={`popup ${isPopup ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__wrapper">
          <div className="popup__info-movie">
            <div className="popup__based-info">
              <h3 className="popup__title">{movie.nameRU ? movie.nameRU : movie.nameEN}</h3>
              <p className={`${movie.nameRU === movie.nameEN ? 'popup__hide' : 'popup__subtitle'}`}>
                {!movie.nameRU ? '' : movie.nameEN}
              </p>
              <p className="popup__director">
                Режиссёр:
                {` ${movie.director}`}
              </p>
            </div>
            <div className="popup__add-info">
              <p className="popup__add-info_paragraph">
                Продолжительность:
                {` ${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`}
              </p>
              <p className="popup__add-info_paragraph">
                {`Страна: ${movie.country}`}
              </p>
              <p className="popup__add-info_paragraph">
                {`Год: ${movie.year}`}
              </p>
            </div>
          </div>
          <div className="popup__image-container">
            <img src={movie.image} alt="image" className="popup__image" />
            <a
              className="popup__link"
              href={movie.trailer}
              target="_blank"
              rel="noreferrer"
            >
              Трейлер
            </a>
          </div>

        </div>
        <p className="popup__description">
          {movie.description}
        </p>

        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть"
          onClick={onClosePopup}
        />
      </div>
    </div>
  );
}

// nameRU (nameEN) - year