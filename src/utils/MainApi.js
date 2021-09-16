export const BASE_URL = 'https://api.mesto-mkdirdev.nomoredomains.rocks';
// export const BASE_URL = 'localhost:3000';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const fixPromise = (res) => (
  res.ok ? res.json()
    // eslint-disable-next-line prefer-promise-reject-errors
    : Promise.reject(`Произошла ошибка ${res.status}: ${res.statusText}`)
);

export const register = ({ name, email, password }) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    name, email, password,
  }),
})
  .then((res) => fixPromise(res));

export const authorization = ({ email, password }) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    email, password,
  }),
})
  .then((res) => fixPromise(res));

export const getUserInfo = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    ...headers,
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => fixPromise(res));

export const editUserInfo = (token, name, email) => fetch(`${BASE_URL}/users/me`, {
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

export const getSavedMovies = (token) => fetch(`${BASE_URL}/movies`, {
  method: 'GET',
  headers: {
    ...headers,
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => fixPromise(res));

export const saveMovie = (token, movie) => fetch(`${BASE_URL}/movies`, {
  method: 'POST',
  headers: {
    ...headers,
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(movie),
})
  .then((res) => fixPromise(res));

export const deleteMovie = (token, movieId) => fetch(`${BASE_URL}/movies/${movieId}`, {
  method: 'DELETE',
  headers: {
    ...headers,
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => fixPromise(res));