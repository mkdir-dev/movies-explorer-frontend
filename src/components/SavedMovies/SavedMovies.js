/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({
  checkboxOn,
  handleToggleCheckbox,
  isLoading,
  deleteMoviesCard,
  movies,
  savedMovies,
  onSearchSavedMoviesByValue,
  onDeleteMoviesCard,
}) {
  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          onSearchSavedMoviesByValue={onSearchSavedMoviesByValue}
          pageSavedMovies={true}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={movies}
            deleteMoviesCard={deleteMoviesCard}
            pageSavedMovies={true}
            savedMovies={savedMovies}
            onDeleteMoviesCard={onDeleteMoviesCard}
          />
        )}
      </div>
    </section>
  );
}
