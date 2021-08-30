/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './FormAuth.css';
import Logotype from '../Logotype/Logotype';

export default function FormAuth({
  children, linkHistory, title, buttonText, typeButton, question, link, linkText,
}) {
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    history.push(`${linkHistory}`);
  }

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
          onSubmit={handleSubmit}
        >

          {children}

          <button
            aria-label={buttonText}
            className={`auth-form__button-submit auth-form__button-submit_type_${typeButton}`}
            type="submit"
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
