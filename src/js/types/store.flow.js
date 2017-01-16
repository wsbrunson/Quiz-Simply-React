// @flow
import type { TypeAction } from "./actions.flow";
import type { TypeQuestion, TypeQuestionId } from "./quiz.flow";

export type TypeQuizState = {
  quizName: string,
  quizQuestions: TypeQuestion[],
  quizLength: number
};

export type TypePaginationState = number;

export type TypeSelectionsState = Array<{ question: TypeQuestionId }>;

export type TypeStore = {
  quizState: TypeQuizState,
  paginationState: TypePaginationState,
  selections: TypeSelectionsState
};

export type TypeGetState = () => TypeStore;

type TypeDispatchThunk = <R>(Action: TypeThunk<R>) => R;
// eslint-disable-line no-undef
type TypeDispatchAction = <R: TypeReduxAction | TypeAction>(action: R) => R;
// eslint-disable-line no-undef
export type TypeDispatch = TypeDispatchThunk & TypeDispatchAction;

type TypeReduxAction = { type: string };
export type TypeThunk<R> = (
  dispatch: TypeDispatch,
  getState: TypeGetState
) => R; // eslint-disable-line no-undef
