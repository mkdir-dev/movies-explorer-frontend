import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

export default function App() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  // отображение шапки и подвала
  // const [pageLocation, setPageLocation] = useState(false);

  // отображение header
  const [headerLocation, setHeaderLocation] = useState(false);

  // отображение  footer
  const [footerLocation, setFooterLocation] = useState(false);

  // цвет фона шапки страницы
  const [backgroundHeader, setBackgroundHeader] = useState(false);

  // изменить стейт при регистрации - войти
  const onLogin = () => {
    setLoggedIn(true);
  };

  // изменить стейт при регистрации - выйти
  const signOut = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    // если на этих страницах, то показывать header
    if (
      location.pathname === '/movies'
      || location.pathname === '/saved-movies'
      || location.pathname === '/profile'
      || location.pathname === '/'
    ) {
      setHeaderLocation(false);
    } else {
      setHeaderLocation(true);
    }
  }, [location]);

  useEffect(() => {
    // если на этих страницах, то показывать footer
    if (
      location.pathname === '/movies'
      || location.pathname === '/saved-movies'
      || location.pathname === '/'
    ) {
      setFooterLocation(false);
    } else {
      setFooterLocation(true);
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
        headerLocation={headerLocation}
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

          <Route path="/profile">
            <Profile signOut={signOut} />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>

          <Route path="/not-found">
            <NotFound />
          </Route>

        </Switch>
      </main>
      <Footer
        footerLocation={footerLocation}
      />
    </div>
  );
}
