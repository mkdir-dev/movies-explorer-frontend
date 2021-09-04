/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movieCards, deleteMoviesCard }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movieCards.map((card, idx) => (
          <MoviesCard
            card={card}
            key={idx}
            deleteMoviesCard={deleteMoviesCard}
          />
        ))}
      </ul>
    </section>
  );
}
