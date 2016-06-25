import React from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';
import Root from './components/Root';

import '../css/main.scss';

const store = configureStore();

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
  <Root store={store} />,
  appEntry
);
