/* eslint-disable react/prop-types */
import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movieCards, deleteMoviesCard }) {
  function handleMore() {
    console.log('Невозможно подгрузить карточки фильмов. Попробуйте позже');
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movieCards.map((card) => (
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
