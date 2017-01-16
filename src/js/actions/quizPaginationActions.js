// @flow
import { NEXT_QUESTION, PREVIOUS_QUESTION } from "../constants/actionTypes";

export type TypeNextQuestionAction = { type: typeof NEXT_QUESTION };

export const nextQuestion = (): TypeNextQuestionAction =>
  ({ type: NEXT_QUESTION });

export type TypePreviousQuestionAction = { type: typeof PREVIOUS_QUESTION };

export const previousQuestion = (): TypePreviousQuestionAction =>
  ({ type: PREVIOUS_QUESTION });
