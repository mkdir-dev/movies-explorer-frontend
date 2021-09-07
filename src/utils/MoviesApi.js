/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-promise-reject-errors */
const beatfilmApi = 'https://api.nomoreparties.co/beatfilm-movies';

const fixPromise = (res) => {
  // проверить, всё ли в порядке с ответом
  if (res.ok) {
    return res.json();
  }
  // если ошибка, то отклонить промис
  return Promise.reject(`Произошла ошибка ${res.status}: ${res.statusText}`);
};

export function getMovies() {
  return fetch(`${beatfilmApi}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => fixPromise(res));
}