import React from 'react';
import { Link } from 'react-router-dom';

import './Logotype.css';

export default function Logotype() {
  return (
    <Link
      className="logotype"
      to="/"
    />
  );
}
