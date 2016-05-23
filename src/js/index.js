import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import App from './components/App';

require('../css/main.scss');

const store = createStore(
	rootReducer,
	{},
	applyMiddleware(thunkMiddleware)
	// window.devToolsExtension ? window.devToolsExtension() : undefined
);

// For testing, so that the app gets added to PhantomJS DOM
const entryId = 'app';
const appEntry = document.getElementById(entryId);

if (!appEntry) {
	const newDiv = document.createElement('div');
	newDiv.id = entryId;
	document.body.appendChild(newDiv);
}

if (typeof window !== 'undefined') {
	window.React = React;
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appEntry
);
