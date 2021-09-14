/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movieCards,
  deleteMoviesCard,
  isNotFound,
  isErrorServer,
}) {
  const windowWidth = window.innerWidth;
  const [isDisplayWidth, setDisplayWidth] = useState(windowWidth);
  const [moviesCount, setMoviesCount] = useState(0);
  const [addMoviesCount, setAddMoviesCount] = useState(0);

  const handleMore = () => {
    setMoviesCount(moviesCount + addMoviesCount);
  };

  useEffect(() => {
    const callbackWidth = () => {
      setDisplayWidth(windowWidth);
    };

    window.addEventListener('resize', callbackWidth);

    if (windowWidth <= 640) {
      setMoviesCount(5);
      setAddMoviesCount(5);
    } else {
      setMoviesCount(7);
      setAddMoviesCount(7);
    }

    return () => window.removeEventListener('resize', callbackWidth);
  }, [isDisplayWidth, windowWidth]);

  return (
    <section className="movies-card-list">
      <span
        className={`movies-card-list__message
          ${!isNotFound ? 'movies-card-list__message_hide' : ''} `}
      >
        Ничего не найдено
      </span>
      <span
        className={`movies-card-list__message
          ${!isErrorServer ? 'movies-card-list__message_hide' : ''} `}
      >
        Во время запроса произошла ошибка. Возможно,
        проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз
      </span>
      <ul className="movies-card-list__container">
        {movieCards.slice(0, moviesCount).map((card) => (
          <MoviesCard
            card={card}
            key={card.id}
            deleteMoviesCard={deleteMoviesCard}
          />
        ))}
      </ul>
      <button
        className="movies-card-list__button"
        type="button"
        onClick={handleMore}
      >
        Ещё
      </button>
    </section>
  );
}
