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
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useState(false);

  // отображение шапки и подвала
  const [pageLocation, setPageLocation] = useState(false);

  // console.log(`1: ${pageLocation}`);
  // console.log(`2: ${setPageLocation}`);

  // изменить стейт при регистрации - войти
  const onLogin = () => {
    setLoggedIn(true);
  };

  // изменить стейт при регистрации - выйти
  // eslint-disable-next-line no-unused-vars
  function signOut() {
    setLoggedIn(false);
  }

  // если на этих страницах, то непоказывать шапку и подвал
  useEffect(() => {
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

  return (
    <div className="page">
      <Header
        pageLocation={pageLocation}
      />
      <main className="content">
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signup">
            <Register onLogin={onLogin} />
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
