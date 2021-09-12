/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { infoMoviesLiked } from '../../utils/constants';

export default function Movies({ checkboxOn, handleToggleCheckbox, deleteMoviesCard }) {
  const [isLoading, setLoading] = useState(false);

  // сделать показ прелоадера при нажатии на кнопку поиска
  const handlePreloader = () => {
    setLoading(!isLoading);

    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="movies">
      <div className="container">
        <SearchForm
          checkboxOn={checkboxOn}
          handleToggleCheckbox={handleToggleCheckbox}
          handlePreloader={handlePreloader}
        />
        {isLoading ? (
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
