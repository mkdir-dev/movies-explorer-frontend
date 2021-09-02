/* eslint-disable react/prop-types */
import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
// <Preloader />

export default function Movies({ isOn, handleToggle }) {
  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          isOn={isOn}
          handleToggle={handleToggle}
        />
        <Preloader />
      </div>
    </section>
  );
}
