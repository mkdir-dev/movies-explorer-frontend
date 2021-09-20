/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import FormAuth from '../FormAuth/FormAuth';
import useValidForm from '../../hooks/useValidForm';

export default function Register({
  onRegister, isMessageErrorAPI, sendingData, messageSendingData,
}) {
  const {
    values, errors, isValidForm, handleChange, resetForm,
  } = useValidForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <FormAuth
      linkHistory="/signin"
      title="Добро пожаловать!"
      buttonText={sendingData ? messageSendingData : 'Зарегистрироваться'}
      typeButton="signup"
      question="Уже зарегистрированы? &nbsp;"
      link="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
      isDisabled={!isValidForm}
      isMessageErrorAPI={isMessageErrorAPI}
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
          // сделать 30, потому что так в бэкенде
          maxLength="30"
          pattern="[а-яА-Яa-zA-ZёË\- ]{2,30}"
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        <span
          className="auth-form__input-error"
        >
          {errors.name}
        </span>
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
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span
          className="auth-form__input-error"
        >
          {errors.email}
        </span>
      </label>
      <label
        className="auth-form__label"
        htmlFor="auth-input-password"
      >
        Пароль
        <input
          // auth-form__input_type_error
          className="auth-form__input"
          id="auth-input-password"
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="8"
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        <span
          className="auth-form__input-error"
        >
          {errors.password}
        </span>
      </label>

    </FormAuth>
  );
}
