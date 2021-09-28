/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => (
        props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      )}
    </Route>
  );
}