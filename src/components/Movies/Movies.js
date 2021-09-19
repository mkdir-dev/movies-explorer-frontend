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
  savedMovies,
  onSearchMoviesByValue,
  isNotFound,
  isErrorServer,
  onSaveMoviesCard,
  onDeleteMoviesCard,
  // isLiked,
}) {
  const likedMovies = savedMovies.map((movie) => movie.movieId);
  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          onSearchMoviesByValue={onSearchMoviesByValue}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={movies}
            savedMovies={savedMovies}
            isNotFound={isNotFound}
            isErrorServer={isErrorServer}
            onSaveMoviesCard={onSaveMoviesCard}
            onDeleteMoviesCard={onDeleteMoviesCard}
            pageSavedMovies={false}
            isLikedMovies={likedMovies}
          // isLiked={isLiked}
          />
        )}
      </div>
    </section>
  );
}
