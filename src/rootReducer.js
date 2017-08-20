// @flow
import { combineReducers } from 'redux';

import quizReducer from './quiz/quizReducer';

export default combineReducers({
  quiz: quizReducer,
});
