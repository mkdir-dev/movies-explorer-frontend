// шаблон для реализации функционала отображения карточек с фильмами
// в зависимости от разрешения экрана

export default function throttle(func, delay) {
  let timeout = null;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args);
        timeout = null;
      }, delay);
    }
  };
}