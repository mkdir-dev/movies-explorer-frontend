/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Checkbox.css';

// eslint-disable-next-line react/prop-types
export default function Checkbox({ checkboxOn, handleToggleCheckbox }) {
  return (
    <div className="checkbox">
      <div className="checkbox__wrapper">
        <input
          checked={checkboxOn}
          onChange={handleToggleCheckbox}
          className="checkbox__input"
          id="checkbox"
          type="checkbox"
        />
        <label
          className="checkbox__label"
          htmlFor="checkbox"
        >
          <span
            className="checkbox__button"
            style={{ background: checkboxOn && 'rgba(61, 220, 132, 1)' }}
          />
        </label>
      </div>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}
