// @flow
import fetchQuizReducer from '../fetchQuizReducer'
import { receiveQuiz } from '../../actions/fetchQuizActions'
import { quizName, quizDATA } from '../../quizJSON'

describe('Fetch Quiz Reducer', () => {
  describe('when receiving a quiz', () => {
    it('should return a state with a quiz', () => {
      const receiveQuizPayload = {
        quizName,
        quizQuestions: quizDATA,
        quizLength: quizDATA.length
      }

      expect(fetchQuizReducer(undefined, receiveQuiz(receiveQuizPayload))).toEqual({
        quizName,
        quizQuestions: quizDATA,
        quizLength: quizDATA.length
      })
    })
  })
})
