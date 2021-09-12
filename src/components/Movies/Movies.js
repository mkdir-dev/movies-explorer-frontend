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
  const [isLoading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

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

  // сделать показ прелоадера при нажатии на кнопку поиска
  const handlePreloader = () => {
    setLoading(!isLoading);

    setTimeout(() => setLoading(false), 500);
    loadMoviesApi();
  };

  // стейт значения в строке поиска
  const [searchValue, setSearchValue] = useState('');
  const [isSearchValidity, setSearchValidity] = useState(false);
  // записать значение в строке поиска
  // и проверить на валидность
  const handleChangeSearchValue = (evt) => {
    if (!evt.target.validity) {
      setSearchValidity(false);
    } else {
      setSearchValidity(true);
    }

    setSearchValue(evt.target.value);
  };

  // отфильтровать фильмы по значению в поиске
  const filteredMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase()
    .includes(searchValue.toLowerCase()));

  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          handlePreloader={handlePreloader}
          onChangeSearchValue={handleChangeSearchValue}
          isSearchValidity={isSearchValidity}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movieCards={filteredMovies}
          />
        )}
      </div>
    </section>
  );
}
