/* eslint-disable promise/always-return */
/* eslint-disable react/prop-types */
import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { infoMovies } from '../../utils/constants';

// import * as MoviesApi from '../../utils/MoviesApi';

export default function Movies({
  checkboxOn,
  handleToggleCheckbox,
  isLoading,
  movies,
  onSearchMoviesByValue,
  isNotFound,
  isErrorServer,
  onSaveMoviesCard,
  onDeleteMoviesCard,
}) {
  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          onSearchMoviesByValue={onSearchMoviesByValue}
          pageSavedMovies={false}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={movies}
            isNotFound={isNotFound}
            isErrorServer={isErrorServer}
            onSaveMoviesCard={onSaveMoviesCard}
            onDeleteMoviesCard={onDeleteMoviesCard}
            pageSavedMovies={false}
          />
        )}
      </div>
    </section>
  );
}
