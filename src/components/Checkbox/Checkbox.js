/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Checkbox.css';

// eslint-disable-next-line react/prop-types
export default function Checkbox({ isOn, handleToggle }) {
  return (
    <div className="checkbox">
      <div className="checkbox__wrapper">
        <input
          checked={isOn}
          onChange={handleToggle}
          className="checkbox__input"
          id="checkbox"
          type="checkbox"
        />
        <label
          className="checkbox__label"
          htmlFor="checkbox"
        >
          <span
            className="checkbox__burron"
            style={{ background: isOn && 'rgba(61, 220, 132, 1)' }}
          />
        </label>
      </div>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}
