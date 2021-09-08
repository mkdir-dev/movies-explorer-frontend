/* eslint-disable promise/always-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { infoMovies } from '../../utils/constants';

import * as MoviesApi from '../../utils/MoviesApi';

export default function Movies({ checkboxOn, handleToggleCheckbox }) {
  const [isPreloader, setPreloader] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  // сделать показ прелоадера при нажатии на кнопку поиска
  const handlePreloader = () => {
    setPreloader(!isPreloader);

    setTimeout(() => setPreloader(false), 2000);
  };

  // загрузить все карточки с фильмами BeatfilmMoviesApi
  const loadMoviesApi = () => {
    MoviesApi.getMovies()
      .then((movies) => {
        setAllMovies(movies);
      })
      .catch(() => {
        setAllMovies([]);
      });
  };

  loadMoviesApi();

  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          handlePreloader={handlePreloader}
        />
        {isPreloader ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={allMovies}
          />
        )}
      </div>
    </section>
  );
}
