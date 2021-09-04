/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import '../Movies/Movies';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { infoMoviesLiked } from '../../utils/constants';

export default function Movies({ checkboxOn, handleToggleCheckbox, deleteMoviesCard }) {
  const [isPreloader, setPreloader] = useState(false);

  // сделать показ прелоадера при нажатии на кнопку поиска
  const handlePreloader = () => {
    setPreloader(!isPreloader);

    setTimeout(() => setPreloader(false), 2000);
  };

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
            movieCards={infoMoviesLiked}
            deleteMoviesCard={deleteMoviesCard}
          />
        )}
      </div>
    </section>
  );
}
