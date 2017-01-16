// @flow
import { ADD_SELECTION } from "../constants/actionTypes";
import type { TypeQuestionId, TypeChoiceId } from "../types/quiz.flow";

export type TypeAddSelectionAction = {
  type: typeof ADD_SELECTION,
  payload: { questionId: TypeQuestionId, choiceId: TypeChoiceId }
};

export const addSelection = (
  questionId: TypeQuestionId,
  choiceId: TypeChoiceId
): TypeAddSelectionAction =>
  ({ type: ADD_SELECTION, payload: { questionId, choiceId } });
