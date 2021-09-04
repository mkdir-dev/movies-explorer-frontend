/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Profile({ signOut }) {
  const history = useHistory();

  function handleSubmit(evt) {
    signOut();
    evt.preventDefault();
    history.push('/');
  }

  function handleSubmitError() {
    console.log('Не получилось редактировать профиль. Попробуйте позже');
  }

  return (
    <section className="auth-form">
      <div className="auth-form__container auth-form__container_type_profile">
        <h2 className="auth-form__title auth-form__title_type_profile">
          Привет, Виталий!
        </h2>
        <form
          className="auth-form__form auth-form__form_type_profile"
          onSubmit={handleSubmit}
        >

          <label
            className="auth-form__label auth-form__label_type_profile"
            htmlFor="auth-input-name-profile"
          >
            Имя
            <input
              className="auth-form__input auth-form__input_type_profile"
              id="auth-input-name-profile"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              defaultValue="Виталий"
              required
            />
            <span
              className="auth-form__input-error"
            />
          </label>

          <label
            className="auth-form__label auth-form__label_type_profile"
            htmlFor="auth-input-email-profile"
          >
            E-mail
            <input
              className="auth-form__input auth-form__input_type_profile"
              id="auth-input-email-profile"
              name="email"
              type="email"
              placeholder="E-mail"
              minLength="5"
              maxLength="40"
              defaultValue="pochta@yandex.ru"
              required
            />
            <span
              className="auth-form__input-error"
            />
          </label>

          <Link
            className="auth-form__link auth-form__link_edit"
            onClick={handleSubmitError}
            to="/profile"
          >
            Редактировать
          </Link>
          <Link
            className="auth-form__link auth-form__link_signout"
            onClick={handleSubmit}
            to="/"
          >
            Выйти из аккаунта
          </Link>

        </form>
      </div>
    </section>
  );
}
