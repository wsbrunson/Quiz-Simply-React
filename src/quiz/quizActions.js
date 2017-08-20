// @flow
import type { TypeQuestionsMap } from '../types/TypeQuiz.flow';

const ActionTypes = {
  REQUEST_QUIZ: 'REQUEST_QUIZ',
  REQUEST_QUIZ_SUCCEEDED: 'REQUEST_QUIZ_SUCCEEDED',
  REQUEST_QUIZ_FAILED: 'REQUEST_QUIZ_FAILED',
};

export type TypeRequestQuizAction = {
  type: typeof ActionTypes.REQUEST_QUIZ,
};

const requestQuiz = () => ({
  type: ActionTypes.REQUEST_QUIZ,
});

export type TypeRequestQuizSucceededAction = {
  type: typeof ActionTypes.REQUEST_QUIZ_SUCCEEDED,
  payload: {
    questions: TypeQuestionsMap,
  },
};

const requestQuizSucceeded = (questions: TypeQuestionsMap) => ({
  type: ActionTypes.REQUEST_QUIZ_SUCCEEDED,
  payload: {
    questions,
  },
});

export type TypeRequestQuizFailedAction = {
  type: typeof ActionTypes.REQUEST_QUIZ_FAILED,
};

const requestQuizFailed = () => ({
  type: ActionTypes.REQUEST_QUIZ_FAILED,
});

export { ActionTypes, requestQuiz, requestQuizSucceeded, requestQuizFailed };
