import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

        </Switch>
      </main>
    </div>
  );
}
