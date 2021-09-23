/* eslint-disable react/prop-types */
import React from 'react';
import { Link /* , useHistory */ } from 'react-router-dom';

import './FormAuth.css';
import Logotype from '../Logotype/Logotype';

export default function FormAuth({
  children, onSubmit,
  title, buttonText,
  typeButton, question,
  link, linkText,
  isDisabled, isMessageErrorAPI,
}) {
  return (
    <section className="auth-form">
      <div className="auth-form__container">
        <div className="logotype__auth">
          <Logotype />
        </div>
        <h2 className="auth-form__title">
          {title}
        </h2>
        <form
          className="auth-form__form"
          onSubmit={onSubmit}
        >

          {children}

          <span className="auth-form__api-error">{isMessageErrorAPI}</span>
          <button
            aria-label={buttonText}
            className={`
              auth-form__button-submit auth-form__button-submit_type_${typeButton}
              ${isDisabled ? 'auth-form__button-submit_disabled' : ''}
            `}
            type="submit"
            disabled={isDisabled}
          >
            {buttonText}
          </button>
          <p className="auth-form__text">
            {question}
            <Link
              className="auth-form__link"
              to={link}
            >
              {linkText}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
