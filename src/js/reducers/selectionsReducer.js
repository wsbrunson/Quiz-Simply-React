import compareObjects from "deep-equal";

import type { TypeAction } from "../types/actions.flow";
import type { TypeSelectionsState } from "../types/store.flow";

const selectionFilter = actions =>
  selection => selection.question !== actions.question;

const compareObjectsFilter = firstObject =>
  secondObject => compareObjects(secondObject, firstObject);

const selectionsReducer = (
  state: TypeSelectionsState = [],
  actions: TypeAction
) =>
  state.filter(selectionFilter(actions)).concat(actions);

export default selectionsReducer;

export const checkIfSelected = (
  selections: TypeSelectionsState = [],
  ownChoice
) =>
  selections.filter(compareObjectsFilter(ownChoice)).length;
