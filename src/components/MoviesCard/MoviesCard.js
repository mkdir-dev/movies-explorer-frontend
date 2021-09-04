/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './MoviesCard.css';

export default function MoviesCard({ card }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__wrapper">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{card.title}</h3>
          <p className="movies-card__time">{card.time}</p>
        </div>
        <button
          className={`movies-card__like ${isLiked && 'movies-card__like_active'}`}
          type="button"
          aria-label="Лайк"
          onClick={handleLikeClick}
        />
      </div>
      <div className="movies-card__image-cantainer">
        <img
          className="movies-card__image"
          src={card.image}
          alt={card.title}
        />
      </div>
    </li>
  );
}
