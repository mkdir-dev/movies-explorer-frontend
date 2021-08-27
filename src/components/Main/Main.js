import React from 'react';

import './Main.css';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

export default function Main() {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
    </>
  );
}
