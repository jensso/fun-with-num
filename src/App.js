import './main.scss';
import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LuckyNumbers } from './components/LuckyNumbers.js';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <>
        <LuckyNumbers />
      </>
      </BrowserRouter>
    )
  }
}
