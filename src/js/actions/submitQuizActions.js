// @flow
import { SUBMIT_QUIZ } from "../constants/actionTypes";

export type TypeSubmitQuizAction = {
  type: typeof SUBMIT_QUIZ,
  payload: { hasBeenSubmitted: boolean }
};

export const submitQuiz = (hasBeenSubmitted: boolean): TypeSubmitQuizAction =>
  ({ type: SUBMIT_QUIZ, payload: { hasBeenSubmitted } });
