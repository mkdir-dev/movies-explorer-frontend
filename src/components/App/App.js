import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

export default function App() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  // отображение шапки и подвала
  const [pageLocation, setPageLocation] = useState(false);

  // цвет фона шапки страницы
  const [backgroundHeader, setBackgroundHeader] = useState(false);

  // console.log(`1: ${pageLocation}`);
  // console.log(`2: ${setPageLocation}`);

  // изменить стейт при регистрации - войти
  const onLogin = () => {
    setLoggedIn(true);
  };

  // изменить стейт при регистрации - выйти
  // eslint-disable-next-line no-unused-vars
  const signOut = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    // если на этих страницах, то непоказывать шапку и подвал
    if (
      location.pathname === '/movies'
      || location.pathname === '/saved-movies'
      || location.pathname === '/'
    ) {
      setPageLocation(false);
    } else {
      setPageLocation(true);
    }
  }, [location]);

  // если пользователь на странице с фильмами, то считать его залогиненным
  useEffect(() => {
    if (location.pathname === '/movies') {
      onLogin();
    }
  }, [location]);

  // если пользователь на главной странице, то разукрасить фон шапки
  useEffect(() => {
    if (location.pathname === '/') {
      setBackgroundHeader(true);
    } else {
      setBackgroundHeader(false);
    }
  }, [location]);

  return (
    <div className="page">
      <Header
        pageLocation={pageLocation}
        loggedIn={loggedIn}
        backgroundHeader={backgroundHeader}
      />
      <main className="content">
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>

        </Switch>
      </main>
      <Footer
        pageLocation={pageLocation}
      />
    </div>
  );
}
