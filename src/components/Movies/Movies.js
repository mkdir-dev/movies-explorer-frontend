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
}) {
  // если нет данных, то сказать об этом
  // onSearchMoviesByValue={onSearchMoviesByValue}
  // handlePreloader={handlePreloader}
  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          onSearchMoviesByValue={onSearchMoviesByValue}
          savedMoviesPage={false}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={movies}
            savedMoviesPage={false}
            isNotFound={isNotFound}
            isErrorServer={isErrorServer}
          />
        )}
      </div>
    </section>
  );
}
