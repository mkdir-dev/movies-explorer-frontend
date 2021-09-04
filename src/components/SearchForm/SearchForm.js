/* eslint-disable react/prop-types */
import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search.png';

import Checkbox from '../Checkbox/Checkbox';

export default function SearchForm({ checkboxOn, handleToggleCheckbox, handlePreloader }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handlePreloader();
  };

  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <div className="search-form__container">
          <img src={searchIcon} className="search-form__icon" alt="Поиск" />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            minLength="1"
            required
          />
          <button
            aria-label="Найти"
            className="search-form__search-button"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
        <Checkbox
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
        />
      </div>
    </section>
  );
}
