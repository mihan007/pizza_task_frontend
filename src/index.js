import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import App from './containers/App';
import createStore from './store';
import * as Sentry from '@sentry/browser';
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv();
Sentry.init({dsn: env.REACT_APP_SENTRY});
const { store, persistor } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
