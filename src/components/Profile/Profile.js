/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';

import useValidForm from '../../hooks/useValidForm';
import CurrentUserContext from '../../context/CurrentUserContext';

export default function Profile({
  signOut, onEditUserInfo, sendingData, messageSendingData,
}) {
  const {
    values, setValues, errors, isValidForm, handleChange, resetForm,
  } = useValidForm();
  const currentUser = useContext(CurrentUserContext);

  const handleEditProfile = (evt) => {
    evt.preventDefault();
    onEditUserInfo({
      name: values.name,
      email: values.email,
    });
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    signOut();
  };

  useEffect(() => {
    resetForm();
    setValues({
      email: currentUser.email,
      name: currentUser.name,
    });
  }, [resetForm, currentUser, setValues]);

  return (
    <section className="auth-form">
      <div className="auth-form__container auth-form__container_type_profile">
        <h2 className="auth-form__title auth-form__title_type_profile">
          {`Привет, ${currentUser.name}!`}
        </h2>
        <form
          className="auth-form__form auth-form__form_type_profile"
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
              // сделать 30, потому что так в бэкенде
              maxLength="30"
              pattern="[а-яА-Яa-zA-ZёË\- ]{2,30}"
              value={values.name || ''}
              onChange={handleChange}
              required
            />
            <span
              className="auth-form__input-error_type_profile"
            >
              {errors.name}
            </span>
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
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <span
              className="auth-form__input-error_type_profile"
            >
              {errors.email}
            </span>
          </label>

          <span className={`auth-form__api-sendingData
              ${sendingData ? 'auth-form__api-sendingData_type_success' : 'auth-form__api-sendingData_type_error'}
            `}
          >
            {messageSendingData}
          </span>
          <button
            aria-label="Редактировать"
            type="submit"
            className={`
            auth-form__button-profile auth-form__button-profile_edit
            ${!isValidForm ? 'auth-form__button-profile_edit_disabled' : ''}
            `}
            onClick={handleEditProfile}
            to="/profile"
          >
            Редактировать
          </button>

          <button
            aria-label="Редактировать"
            type="submit"
            className="auth-form__button-profile auth-form__button-profile_signout"
            onClick={handleSignOut}
            to="/"
          >
            Выйти из аккаунта
          </button>

        </form>
      </div>
    </section>
  );
}
