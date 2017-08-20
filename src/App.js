// @flow
import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';

import Routes from './components/Routes';

const App = () =>
  <Provider store={store}>
    <Routes />
  </Provider>;

export default App;
