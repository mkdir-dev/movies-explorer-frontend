import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <AboutProject />
    </div>
  );
}
