// @flow
import { RECEIVE_QUIZ } from '../constants/actionTypes'

import type { TypeQuizState } from '../types/store.flow'
import type { TypeAction } from '../types/actions.flow'

const initalState = {
  quizName: '',
  quizQuestions: [],
  quizLength: 0
}

const fetchQuizReducer = (state: TypeQuizState = initalState, action: TypeAction): TypeQuizState => {
  switch (action.type) {
    case RECEIVE_QUIZ:
      return {
        ...state,
        quizName: action.payload.quizName,
        quizQuestions: action.payload.quizQuestions,
        quizLength: action.payload.quizLength
      }
    default:
      return state
  }
}

export default fetchQuizReducer
