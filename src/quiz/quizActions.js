// @flow
import type {
  TypeQuestionsMap,
  TypeSelectionsMap,
} from '../types/TypeQuiz.flow';

const ActionTypes = {
  REQUEST_QUIZ: 'REQUEST_QUIZ',
  REQUEST_QUIZ_SUCCEEDED: 'REQUEST_QUIZ_SUCCEEDED',
  REQUEST_QUIZ_FAILED: 'REQUEST_QUIZ_FAILED',
  SELECT_CHOICE: 'SELECT_CHOICE',
};

export type TypeRequestQuizAction = {
  type: typeof ActionTypes.REQUEST_QUIZ,
};

const requestQuiz = (): TypeRequestQuizAction => ({
  type: ActionTypes.REQUEST_QUIZ,
});

export type TypeRequestQuizSucceededAction = {
  type: typeof ActionTypes.REQUEST_QUIZ_SUCCEEDED,
  payload: {
    questions: TypeQuestionsMap,
  },
};

const requestQuizSucceeded = (
  questions: TypeQuestionsMap,
): TypeRequestQuizSucceededAction => ({
  type: ActionTypes.REQUEST_QUIZ_SUCCEEDED,
  payload: {
    questions,
  },
});

export type TypeRequestQuizFailedAction = {
  type: typeof ActionTypes.REQUEST_QUIZ_FAILED,
};

const requestQuizFailed = (): TypeRequestQuizFailedAction => ({
  type: ActionTypes.REQUEST_QUIZ_FAILED,
});

export type TypeSelectChoiceAction = {
  type: typeof ActionTypes.SELECT_CHOICE,
  payload: {
    selection: TypeSelectionsMap,
  },
};

const selectChoice = (
  selection: TypeSelectionsMap,
): TypeSelectChoiceAction => ({
  type: ActionTypes.SELECT_CHOICE,
  payload: {
    selection,
  },
});

export {
  ActionTypes,
  requestQuiz,
  requestQuizSucceeded,
  requestQuizFailed,
  selectChoice,
};
