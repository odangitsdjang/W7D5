import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState={};
  if (window.currentUser) {
    preloadedState = { session: {currentUser: window.currentUser} };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  window.login = login;
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});
