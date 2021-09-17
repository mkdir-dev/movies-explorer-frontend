/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movieCards,
  onSaveMoviesCard,
  // deleteMoviesCard,
  onDeleteMoviesCard,
  isNotFound,
  isErrorServer,
  pageSavedMovies,
}) {
  const windowWidth = window.innerWidth;
  const [isDisplayWidth, setDisplayWidth] = useState(windowWidth);
  const [moviesCount, setMoviesCount] = useState(0);
  const [addMoviesCount, setAddMoviesCount] = useState(0);
  console.log(pageSavedMovies); // !!!
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
          ${!isNotFound ? 'movies-card-list__hide' : ''} `}
      >
        Ничего не найдено
      </span>
      <span
        className={`movies-card-list__message
          ${!isErrorServer ? 'movies-card-list__hide' : ''} `}
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
            onSaveMoviesCard={onSaveMoviesCard}
            // deleteMoviesCard={deleteMoviesCard}
            onDeleteMoviesCard={onDeleteMoviesCard}
          />
        ))}
      </ul>
      <button
        className={`${movieCards.length <= moviesCount
          ? 'movies-card-list__hide' : 'movies-card-list__button'}`}
        type="button"
        onClick={handleMore}
      >
        Ещё
      </button>
    </section>
  );
}
