import React from 'react';

import './Movies.css';

import Preloader from '../Preloader/Preloader';

export default function Movies() {
  return (
    <section className="movies">
      <div className="container">
        <Preloader />
      </div>
    </section>
  );
}
