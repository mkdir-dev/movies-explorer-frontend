import React from 'react';

import FormAuth from '../FormAuth/FormAuth';

export default function Register() {
  return (
    <FormAuth
      linkHistory="/signin"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      typeButton="signup"
      question="Уже зарегистрированы? &nbsp;"
      link="/signin"
      linkText="Войти"
    >

      <label
        className="auth-form__label"
        htmlFor="auth-input-name"
      >
        Имя
        <input
          className="auth-form__input"
          id="auth-input-name"
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
          className="auth-form__input auth-form__input_type_error"
          id="auth-input-password"
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="40"
          defaultValue="12345678901234"
          required
        />
        <span
          className="auth-form__input-error"
        >
          Что-то пошло не так...
        </span>
      </label>

    </FormAuth>
  );
}
