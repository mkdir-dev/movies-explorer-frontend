/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movieCards,
  savedMovies,
  onSaveMoviesCard,
  onDeleteMoviesCard,
  isNotFound,
  isErrorServer,
  pageSavedMovies,
  isLikedMovies,
  // isOpenPopup,
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
      <span
        className={`movies-card-list__message
          ${pageSavedMovies && movieCards.length === 0 ? '' : 'movies-card-list__hide'} `}
      >
        Сохраненные фильмы отсутствуют
      </span>
      <ul className="movies-card-list__container">
        {movieCards?.slice(0, moviesCount).map((card) => (
          <MoviesCard
            card={card}
            key={pageSavedMovies ? card.id : card.movieId}
            onSaveMoviesCard={onSaveMoviesCard}
            onDeleteMoviesCard={onDeleteMoviesCard}
            pageSavedMovies={pageSavedMovies}
            savedMovies={savedMovies}
            isLikedMovies={isLikedMovies?.includes(card.id)}
          // isOpenPopup={isOpenPopup}
          />
        ))}
      </ul>
      {!pageSavedMovies ? (
        <button
          className={`${movieCards?.length <= moviesCount
            ? 'movies-card-list__hide' : 'movies-card-list__button'}`}
          type="button"
          onClick={handleMore}
        >
          Ещё
        </button>
      ) : (
        <button type="button" aria-label="Лайк" className="hide-section" />
      )}

    </section>
  );
}
