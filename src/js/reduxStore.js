import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
