/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() => (props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  </Route>
);

export default ProtectedRoute;