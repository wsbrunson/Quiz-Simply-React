// @flow
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes'

import type { TypePaginationState } from '../types/store.flow'
import type { TypeAction } from '../types/actions.flow'
import type { TypeQuestion } from '../types/quiz.flow'

const initalIndex = 0

const quizPaginationReducer = (
  state: TypePaginationState = initalIndex,
  actions: TypeAction
): TypePaginationState => {
  switch (actions.type) {
    case NEXT_QUESTION:
      return state + 1
    case PREVIOUS_QUESTION:
      return state - 1
    default:
      return state
  }
}

export default quizPaginationReducer

export const getQuestionAtIndex = (questions: TypeQuestion[], index: number) => {
  const question = []
  if (questions) {
    if (questions.length <= index) {
      question.push(questions[questions.length - 1])
    } else if (index <= -1) {
      question.push(questions[0])
    } else {
      question.push(questions[index])
    }
  }

  return question
}
