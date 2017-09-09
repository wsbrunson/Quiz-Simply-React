// @flow
import type {
  TypeRequestQuizAction,
  TypeRequestQuizSucceededAction,
  TypeRequestQuizFailedAction,
  TypeSelectChoiceAction,
} from '../quiz/quizActions';

export type TypeAction =
  | TypeRequestQuizAction
  | TypeRequestQuizSucceededAction
  | TypeRequestQuizFailedAction
  | TypeSelectChoiceAction;
