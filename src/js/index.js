import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import selectionsReducer from './reducers/selectionsReducer';
import submitQuizReducer from './reducers/submitQuizReducer';
import App from './components/App';

const reducers = combineReducers({ selectionsReducer, submitQuizReducer });

let store = createStore(reducers,
	window.devToolsExtension ? window.devToolsExtension() : undefined
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
  document.getElementById(entryId)
);
