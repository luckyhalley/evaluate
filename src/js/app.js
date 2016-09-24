import styles from '../styles/layout.scss';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Container from './container';
import configureStore from './store';
import { Provider } from 'react-redux';


if (module.hot) {
  module.hot.accept();
}
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.querySelector('.page')
);

