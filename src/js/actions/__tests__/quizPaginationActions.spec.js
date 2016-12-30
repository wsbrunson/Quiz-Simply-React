// @flow
import { nextQuestion, previousQuestion } from '../quizPaginationActions'
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../../constants/actionTypes'

describe('nextQuestion Action', () => {
  it('should return a nextQuestion action', () => {
    expect(nextQuestion()).toEqual({ type: NEXT_QUESTION })
  })
})

describe('previousQuestion Action', () => {
  it('should return a previousQuestion action', () => {
    expect(previousQuestion()).toEqual({ type: PREVIOUS_QUESTION })
  })
})
