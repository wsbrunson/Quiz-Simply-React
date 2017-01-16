// @flow
import type { TypeAddSelectionAction } from "../actions/addSelectionActions";
import type { TypeReceiveQuizAction } from "../actions/fetchQuizActions";
import type { TypeSubmitQuizAction } from "../actions/submitQuizActions";
import type {
  TypeNextQuestionAction,
  TypePreviousQuestionAction
} from "../actions/quizPaginationActions";

export type TypeAction = 
  | TypeAddSelectionAction
  | TypeReceiveQuizAction
  | TypeSubmitQuizAction
  | TypeNextQuestionAction
  | TypePreviousQuestionAction;
