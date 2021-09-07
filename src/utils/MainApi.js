/* eslint-disable prefer-promise-reject-errors */
export const BASE_URL = 'api.mesto-mkdirdev.nomoredomains.rocks';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function fixPromise(res) {
  return res.ok ? res.json() : Promise.reject(`Произошла ошибка ${res.status}: ${res.statusText}`);
}

export function register(name, password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name, password, email,
    }),
  })
    .then((res) => fixPromise(res));
}

export function authorization(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      password, email,
    }),
  })
    .then((res) => fixPromise(res));
}

export function getUserInfo(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => fixPromise(res));
}

export function editUserInfo(token, name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name, email,
    }),
  })
    .then((res) => fixPromise(res));
}

export function getSavedMovies(token) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => fixPromise(res));
}

export function saveMovie(token, movie) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  })
    .then((res) => fixPromise(res));
}

export function deleteMovie(token, movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => fixPromise(res));
}