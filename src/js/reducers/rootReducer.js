import { combineReducers } from 'redux';

import selectionsReducer from './selectionsReducer';
import submitQuizReducer from './submitQuizReducer';
import quizPaginationReducer from './quizPaginationReducer';
import fetchQuizReducer from './fetchQuizReducer';

const rootReducer = combineReducers({
	selectionsReducer,
	submitQuizReducer,
	quizPaginationReducer,
	fetchQuizReducer,
});

export default rootReducer;
