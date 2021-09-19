/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({
  checkboxOn, handleToggleCheckbox, deleteMoviesCard, movies, savedMovies, /* isLiked, */
}) {
  const [isLoading, setLoading] = useState(false);

  // сделать показ прелоадера при нажатии на кнопку поиска
  const handlePreloader = () => {
    setLoading(!isLoading);

    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          handlePreloader={handlePreloader}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={movies}
            deleteMoviesCard={deleteMoviesCard}
            pageSavedMovies={true}
            savedMovies={savedMovies}
            // isLiked={isLiked}
          />
        )}
      </div>
    </section>
  );
}
