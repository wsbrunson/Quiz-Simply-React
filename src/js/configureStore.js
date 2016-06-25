import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const configureStore = () => (
	createStore(
		rootReducer,
		{},
		applyMiddleware(thunkMiddleware)
	)
);

export default configureStore;
