/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './MoviesCard.css';

export default function MoviesCard({
  card,
  onSaveMoviesCard,
  deleteMoviesCard,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const movie = {
    country: card.country || 'Страна не указана',
    director: card.director || 'Режиссер не указан',
    duration: card.duration,
    year: card.year || 'Год не указан',
    description: card.description || 'Описание не указано',
    image: `https://api.nomoreparties.co${card.image.url}`,
    trailer: card.trailerLink || 'https://youtube.ru',
    nameRU: card.nameRU || 'Название не указано',
    nameEN: card.nameEN || 'Title not specified',
    thumbnail: `https://api.nomoreparties.co${card.image.url}`,
    movieId: card.id,
  };

  const handleLikeClick = () => {
    onSaveMoviesCard(movie);
    setIsLiked(!isLiked);
  };

  const handleDeleteMovie = () => {
    console.log('Не получилось удалить фильм. Попробуйте позже');
  };

  return (
    <li className="movies-card">
      <div className="movies-card__wrapper">
        <div className="movies-card__info">
          <h3 className="movies-card__title">
            {card.nameRU}
          </h3>
          <p className="movies-card__time">
            {`${Math.trunc(card.duration / 60)}ч ${card.duration % 60}м`}
          </p>
        </div>
        <button
          className={`
          movies-card__like
          ${isLiked && 'movies-card__like_active'}
          ${deleteMoviesCard && 'movies-card__delete'}
          `}
          type="button"
          aria-label="Лайк"
          onClick={deleteMoviesCard ? handleDeleteMovie : handleLikeClick}
        />
      </div>
      <div className="movies-card__image-container">
        <a
          className="movies-card__link"
          href={card.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__image"
            src={`https://api.nomoreparties.co${card.image.url}`}
            alt={card.nameRU}
          />
        </a>
      </div>
    </li>
  );
}
