/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './MoviesCard.css';

export default function MoviesCard({ card, deleteMoviesCard }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  function handleDeleteMovie() {
    console.log('Не получилось удалить фильм. Попробуйте позже');
  }

  return (
    <li className="movies-card">
      <div className="movies-card__wrapper">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{card.nameRU}</h3>
          <p className="movies-card__time">{card.duration}</p>
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
      <div className="movies-card__image-cantainer">
        <img
          className="movies-card__image"
          src={card.image}
          alt={card.nameRU}
        />
      </div>
    </li>
  );
}
