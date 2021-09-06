import React from 'react';

import FormAuth from '../FormAuth/FormAuth';

// eslint-disable-next-line react/prop-types
export default function Login({ onLogin }) {
  return (
    <FormAuth
      onLogin={onLogin}
      linkHistory="/"
      title="Рады видеть!"
      buttonText="Войти"
      typeButton="signin"
      question="Еще не зарегистрированы? &nbsp;"
      link="/signup"
      linkText="Регистрация"
    >

      <label
        className="auth-form__label"
        htmlFor="auth-input-email"
      >
        E-mail
        <input
          className="auth-form__input"
          id="auth-input-email"
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
      <label
        className="auth-form__label"
        htmlFor="auth-input-password"
      >
        Пароль
        <input
          className="auth-form__input"
          id="auth-input-password"
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="40"
          required
        />
        <span
          className="auth-form__input-error"
        />
      </label>

    </FormAuth>
  );
}
