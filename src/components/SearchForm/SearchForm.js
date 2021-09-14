/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search.png';

import Checkbox from '../Checkbox/Checkbox';

export default function SearchForm({
  checkboxOn,
  handleToggleCheckbox,
  // handlePreloader,
  onSearchMoviesByValue, // прописать в корневом файле стейт
  // onSearchSavedMoviesByValue, // прописать в корневом файле стейт
  savedMoviesPage, // прописать в корневом файле стейт
}) {
  // стейт значения в строке поиска
  const [searchValue, setSearchValue] = useState('');
  const [isSearchValidity, setSearchValidity] = useState(false);

  const handleChangeSearchValue = (evt) => {
    if (!evt.target.validity) {
      setSearchValidity(false);
    } else {
      setSearchValidity(true);
    }

    setSearchValue(evt.target.value);
  };

  const handleSearchMovies = (evt) => {
    evt.preventDefault();
    onSearchMoviesByValue(searchValue);
    // console.log(searchValue);
    // console.log('handleSearchMovies');
  };

  const handleSearchSavedMovies = (evt) => {
    evt.preventDefault();
    // onSearchSavedMoviesByValue(searchValue);
    // console.log('handleSearchSavedMovies');
  };

  //

  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form
          className="search-form__container"
          onSubmit={!savedMoviesPage ? handleSearchMovies : handleSearchSavedMovies}
        >
          <img
            src={searchIcon}
            className="search-form__icon"
            alt="Поиск"
          />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            onChange={handleChangeSearchValue}
            value={searchValue || ''}
            required
          />
          <span
            className={`search-form__err
              ${isSearchValidity ? 'search-form__err_hide' : ''}`}
          >
            Нужно ввести ключевое слово
          </span>
          <button
            className="search-form__search-button"
            type="submit"
            aria-label="Найти"
          />
        </form>
        <Checkbox
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
        />
      </div>
    </section>
  );
}