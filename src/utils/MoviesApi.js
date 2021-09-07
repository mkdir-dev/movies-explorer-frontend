/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-promise-reject-errors */
const beatfilmApi = 'https://api.nomoreparties.co/beatfilm-movies';

function fixPromise(res) {
  return res.ok ? res.json() : Promise.reject(`Произошла ошибка ${res.status}: ${res.statusText}`);
}

export function getMovies() {
  return fetch(`${beatfilmApi}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => fixPromise(res));
}