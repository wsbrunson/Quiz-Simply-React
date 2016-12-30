// @flow
import { submitQuiz } from '../submitQuizActions'
import { SUBMIT_QUIZ } from '../../constants/actionTypes'

describe('submitQuiz Action', () => {
  it('should return a submitQuiz action', () => {
    expect(submitQuiz(true)).toEqual({ type: SUBMIT_QUIZ, payload: { hasBeenSubmitted: true } })
    expect(submitQuiz(false)).toEqual({ type: SUBMIT_QUIZ, payload: { hasBeenSubmitted: false } })
  })
})
