// @flow
import { ActionTypes } from './quizActions';
import type { TypeAction } from '../types/TypeAction.flow';
import type {
  TypeQuestionsMap,
  TypeSelectionsMap,
} from '../types/TypeQuiz.flow';

export type TypeQuizState = {
  questions: TypeQuestionsMap,
  selections: TypeSelectionsMap,
};

const initialState = {
  questions: {},
  selections: {},
};

export default (state: TypeQuizState = initialState, action: TypeAction) => {
  switch (action.type) {
    case ActionTypes.REQUEST_QUIZ_SUCCEEDED:
      return {
        ...state,
        questions: action.payload.questions,
      };
    case ActionTypes.SELECT_CHOICE:
      return {
        ...state,
        selections: {
          ...state.selections,
          ...action.payload.selection,
        },
      };
    default:
      return state;
  }
};
