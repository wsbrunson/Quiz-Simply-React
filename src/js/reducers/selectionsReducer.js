
import compareObjects from 'deep-equal'

import type { TypeAction } from '../types/actions.flow'
import type { TypeSelectionsState } from '../types/store.flow'

const selectionsReducer = (state: TypeSelectionsState = [], actions: TypeAction) => {
  return state.filter(selection => {
    return selection.question !== actions.question
  }).concat(actions)
}

export default selectionsReducer

export const checkIfSelected = (selections: TypeSelectionsState = [], ownChoice) => {
  return selections.filter(selection => {
    return compareObjects(selection, ownChoice)
  }).length
}
