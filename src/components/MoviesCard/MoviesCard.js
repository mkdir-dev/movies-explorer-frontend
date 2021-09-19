/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './MoviesCard.css';

export default function MoviesCard({
  card,
  onSaveMoviesCard,
  onDeleteMoviesCard,
  pageSavedMovies,
  isLikedMovies,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const movie = {
    country: card.country || 'Страна не указана',
    director: card.director || 'Режиссер не указан',
    duration: card.duration || 0,
    year: card.year || 'Год не указан',
    description: card.description || 'Описание не указано',
    image: `https://api.nomoreparties.co${card.image?.url}`,
    trailer: card.trailerLink || 'https://youtube.ru',
    nameRU: card.nameRU || 'Название не указано',
    nameEN: card.nameEN || 'Title not specified',
    thumbnail: `https://api.nomoreparties.co${card.image?.url}`,
    movieId: card.id,
  };

  const parseSavedMovies = JSON.parse(
    localStorage.getItem('savedMovies'),
  );

  const currentMovie = parseSavedMovies.find(
    (movie) => movie.nameRU === card.nameRU,
  );

  function handleLikeClick() {
    onSaveMoviesCard(movie)
      .then(() => setIsLiked(true))
      .catch((err) => console.log(err));
  }

  const handleDeleteMovie = () => {
    onDeleteMoviesCard(card._id)
      .then(() => setIsLiked(false))
      .catch((err) => console.log(err));
  };

  const handleDislikeClick = () => {
    onDeleteMoviesCard(currentMovie._id)
      .then(() => setIsLiked(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [isLiked]);

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
        {pageSavedMovies ? (
          <button
            aria-label="Удалить"
            type="button"
            className="movies-card__like movies-card__delete"
            onClick={handleDeleteMovie}
          />
        ) : (
          <button
            className={`
          movies-card__like
          ${isLikedMovies || isLiked ? 'movies-card__like_active' : ''}
          `}
            type="button"
            aria-label="Лайк"
            onClick={isLiked ? handleDislikeClick : handleLikeClick}
          />
        )}

      </div>
      <div className="movies-card__image-container">
        <a
          className="movies-card__link"
          href={pageSavedMovies ? card.trailer : card.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__image"
            src={pageSavedMovies ? card.image : `https://api.nomoreparties.co${card.image?.url}`}
            alt={card.nameRU}
          />
        </a>
      </div>
    </li>
  );
}