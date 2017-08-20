// @flow
import { ActionTypes } from './quizActions';
import type { TypeAction } from '../types/TypeAction.flow';
import type { TypeQuestionsMap } from '../types/TypeQuiz.flow';

export type TypeQuizState = {
  questions: TypeQuestionsMap,
};

const initialState = {
  questions: {},
};

export default (state: TypeQuizState = initialState, action: TypeAction) => {
  switch (action.type) {
    case ActionTypes.REQUEST_QUIZ_SUCCEEDED:
      return {
        ...state,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};
