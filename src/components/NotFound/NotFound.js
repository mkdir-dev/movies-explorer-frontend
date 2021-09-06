import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFoundPage() {
  const history = useHistory();

  const handleClick = () => history.goBack();

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button
        className="not-found__button"
        onClick={handleClick}
        aria-label="Назад"
        type="submit"
      >
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;