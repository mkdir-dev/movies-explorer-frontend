/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable promise/always-return */
import React, { useState, useEffect } from 'react';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';

import CurrentUserContext from '../../context/CurrentUserContext';

export default function App() {
  const location = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [headerLocation, setHeaderLocation] = useState(false); // отображение header
  const [footerLocation, setFooterLocation] = useState(false); // отображение  footer
  const [backgroundHeader, setBackgroundHeader] = useState(false); // цвет фона шапки страницы
  // разрешить пользователю удалять карточки после сохранения
  const [isDeleteMoviesCard, setDeleteMoviesCard] = useState(false);
  // стейт лоадера
  const [isLoading, setLoading] = useState(false);
  // стейт фильмов
  const [movies, setMovies] = useState([]);
  // стейт всех загруженных фильмов со стороннего BeatfilmMoviesApi
  const [allMovies, setAllMovies] = useState([]);
  // стей сообщения неудачного поиска
  const [isNotFound, setNotFound] = useState(false);
  // стей сообщения об ошибке сервера при поиске
  const [isErrorServer, setErrorServer] = useState(false);
  // стейт чекбокса
  const [checkboxValue, setCheckboxValue] = useState(false);
  // стейт сообщения об ошибке API
  const [isMessageErrorAPI, setMessageErrorAPI] = useState('');
  // стейт сохраненных фильмов
  const [savedMovies, setSavedMovies] = useState([]);

  const checkToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
      MainApi.getUserInfo(token)
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(`Не удалось передать токен. Ошибка: ${err}.`);
        });
    } else {
      console.log('Нет токена - потерялся');
    }
  };

  const handleToggleCheckbox = () => {
    setCheckboxValue(!checkboxValue);
  };

  // изменить стейт при выходе из профиля
  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setLoggedIn(false);
    history.push('/');
  };

  // вход пользователя
  const handleLogin = (email, password) => {
    MainApi.authorization(email, password)
      .then((res) => {
        // сбросить текст, иначе останется
        setMessageErrorAPI('');
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(`Не удалось войти. Ошибка: ${err}.`);
        setMessageErrorAPI('Что-то пошло не так...');
      });
  };

  // регистрация пользователя
  const handleRegister = (name, email, password) => {
    MainApi.register(name, email, password)
      .then(() => {
        // сбросить текст, иначе останется
        setMessageErrorAPI('');
        handleLogin(name, email, password);
      })
      .catch((err) => {
        console.log(`Не удалось зарегистрироваться. Ошибка: ${err}.`);
        setMessageErrorAPI('Что-то пошло не так...');
      });
  };

  // редактирование профиля
  const handleEditUserInfo = (name, email) => {
    const token = localStorage.getItem('token');
    MainApi.editUserInfo(token, name, email)
      .then((res) => {
        setCurrentUser(res);
        console.log('Данные пользователя изменены успешно');
      })
      .catch((err) => {
        console.log(`Не удалось изменить данные пользователя. Ошибка: ${err}.`);
      });
  };

  const handleSaveMoviesCard = (movie) => {
    const token = localStorage.getItem('token');
    return MainApi.saveMovie(token, movie)
      .then((savedMovie) => {
        localStorage.setItem(
          'savedMovies',
          JSON.stringify([savedMovie, ...savedMovies]),
        );
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .then((res) => res)
      .catch((err) => {
        console.log(`Не удалось сохранить фильм. Ошибка: ${err}.`);
      });
  };

  const handleDeleteMoviesCard = (movieId) => {
    const token = localStorage.getItem('token');
    return MainApi.deleteMovie(token, movieId)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (deleteMovie) => deleteMovie._id !== movieId,
        );
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log(`Не удалось удалить фильм. Ошибка: ${err}.`);
      });
  };

  const handleFilteredMovies = (movies, keyword) => {
    // фильтрация фильмов по ключевому слову
    console.log(movies);
    const filteredMoviesByKeyword = movies
      .filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        || (movie.nameEN ? movie.nameEN : '').toLowerCase().includes(keyword.toLowerCase()));

    // фильтрация фильмов по чекбоксу короткометражки
    const filteredMoviesByCheckbox = filteredMoviesByKeyword.filter(
      (movie) => movie.duration < 40,
    );

    // если стоит чекбокс короткометражки
    if (checkboxValue) {
      // вернуть короткометражки
      return filteredMoviesByCheckbox;
    }
    // иначе вернуть все фильмы по ключевому слову
    return filteredMoviesByKeyword;
  };

  const handleSearchMovies = (keyword) => {
    setLoading(true);
    setMovies([]);
    setNotFound(false);

    if (allMovies.length === 0) {
      // загрузить все карточки с фильмами BeatfilmMoviesApi
      MoviesApi.getMovies()
        // eslint-disable-next-line no-shadow
        .then((movies) => {
          setAllMovies(movies);
          const resFilteredMovies = handleFilteredMovies(movies, keyword);

          if (resFilteredMovies.length === 0) {
            setMovies([]);
            setLoading(false);
            // сообщить потльзователю, что "Ничего не найдено"
            setNotFound(true);
          } else {
            // localStorage можно вынести
            localStorage.setItem('movies', JSON.stringify(resFilteredMovies));
            setMovies(JSON.parse(localStorage.getItem('movies')));
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
          setErrorServer(true);
          setAllMovies([]);
        });
    } else {
      const resFilteredMovies = handleFilteredMovies(allMovies, keyword);

      if (resFilteredMovies.length === 0) {
        setMovies([]);
        setLoading(false);
        // сообщить потльзователю, что "Ничего не найдено"
        setNotFound(true);
      } else if (resFilteredMovies.length !== 0) {
        localStorage.setItem('movies', JSON.stringify(resFilteredMovies));
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setLoading(false);
      } else {
        setLoading(false);
        setErrorServer(true);
        setMovies([]);
      }
    }
  };

  const handleSearchSavedMovies = (keyword) => {
    // !!! улучшить поиск
    const resFilteredMovies = handleFilteredMovies(
      savedMovies,
      keyword,
    );
    setSavedMovies(resFilteredMovies);
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

    // если пользователь на странице с фильмами, то считать его залогиненным
    if (location.pathname === '/movies'
      || location.pathname === '/saved-movies') {
      setLoggedIn(true);
    }

    // если пользователь на странице сохраненных фильмов, то может их удалить
    if (location.pathname === '/saved-movies') {
      setDeleteMoviesCard(true);
    } else {
      setDeleteMoviesCard(false);
    }

    // если пользователь на главной странице, то разукрасить фон шапки
    if (location.pathname === '/') {
      setBackgroundHeader(true);
    } else {
      setBackgroundHeader(false);
    }
  }, [location]);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // положить в хранилище результат поиска

    if (loggedIn) {
      Promise.all([
        MainApi.getUserInfo(token),
        MainApi.getSavedMovies(token),
      ])
        .then(([userInfo, movies]) => {
          setCurrentUser(userInfo);
          localStorage.setItem('savedMovies',
            JSON.stringify([...savedMovies, movies]));
          setSavedMovies(...savedMovies, movies);

          if ('movies' in localStorage) {
            setMovies(JSON.parse(localStorage.getItem('movies')));
          } else {
            setMovies([]);
          }
        })
        .catch((err) => {
          console.log(`Данные с сервера не получены. Ошибка: ${err}.`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider
      value={currentUser}
    >
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
              <Register
                onRegister={handleRegister}
                isMessageErrorAPI={isMessageErrorAPI}
              />
            </Route>

            <Route path="/signin">
              <Login
                onLogin={handleLogin}
                isMessageErrorAPI={isMessageErrorAPI}
              />
            </Route>

            <Route path="/profile">
              <Profile
                signOut={signOut}
                onEditUserInfo={handleEditUserInfo}
              />
            </Route>

            <Route path="/movies">
              <Movies
                checkboxOn={checkboxValue}
                handleToggleCheckbox={handleToggleCheckbox}
                isLoading={isLoading}
                movies={movies}
                savedMovies={savedMovies}
                onSearchMoviesByValue={handleSearchMovies}
                isNotFound={isNotFound}
                isErrorServer={isErrorServer}
                onSaveMoviesCard={handleSaveMoviesCard}
                onDeleteMoviesCard={handleDeleteMoviesCard}
              />
            </Route>

            <Route path="/saved-movies">
              <SavedMovies
                checkboxOn={checkboxValue}
                handleToggleCheckbox={handleToggleCheckbox}
                movies={savedMovies}
                savedMovies={savedMovies}
                onSearchSavedMoviesByValue={handleSearchSavedMovies}
                deleteMoviesCard={isDeleteMoviesCard}
                onDeleteMoviesCard={handleDeleteMoviesCard}
              />
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
    </CurrentUserContext.Provider>
  );
}
