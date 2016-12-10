import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App';

const propTypes = {
	store: PropTypes.object.isRequired,
};

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

Root.PropTypes = propTypes;

export default Root;
