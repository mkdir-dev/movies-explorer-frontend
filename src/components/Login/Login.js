/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import FormAuth from '../FormAuth/FormAuth';
import useValidForm from '../../hooks/useValidForm';

export default function Login({
  onLogin, isMessageErrorAPI, sendingData, messageSendingData,
}) {
  const {
    values, errors, isValidForm, handleChange, resetForm,
  } = useValidForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <FormAuth
      onLogin={onLogin}
      linkHistory="/"
      title="Рады видеть!"
      buttonText={sendingData ? messageSendingData : 'Войти'}
      typeButton="signin"
      question="Еще не зарегистрированы? &nbsp;"
      link="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
      isDisabled={!isValidForm}
      isMessageErrorAPI={isMessageErrorAPI}
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
