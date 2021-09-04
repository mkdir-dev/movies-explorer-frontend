/* eslint-disable react/prop-types */
import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movieCards }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movieCards.map((card) => (
          <MoviesCard
            card={card}
          />
        ))}
      </ul>
    </section>
  );
}
