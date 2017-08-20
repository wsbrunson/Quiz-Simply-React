// @flow
import type {
  TypeRequestQuizAction,
  TypeRequestQuizSucceededAction,
  TypeRequestQuizFailedAction,
} from '../quiz/quizActions';

export type TypeAction =
  | TypeRequestQuizAction
  | TypeRequestQuizSucceededAction
  | TypeRequestQuizFailedAction;
