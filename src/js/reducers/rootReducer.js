// @flow
import { combineReducers } from "redux";

import selectionsReducer from "./selectionsReducer";
import submitQuizReducer from "./submitQuizReducer";
import quizPaginationReducer from "./quizPaginationReducer";
import fetchQuizReducer from "./fetchQuizReducer";

const rootReducer = combineReducers({
  submitQuizReducer,
  quizPaginationReducer,
  quizState: fetchQuizReducer,
  selections: selectionsReducer
});

export default rootReducer;
