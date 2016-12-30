// @flow
import quizPaginationReducer from '../quizPaginationReducer'
import { nextQuestion, previousQuestion } from '../../actions/quizPaginationActions'

describe('Quiz Pagination Reducer', () => {
  describe('when reducing Next action', () => {
    it('should advance the quiz index by one on a next action', () => {
      expect(quizPaginationReducer(undefined, nextQuestion())).toEqual(1)
      expect(quizPaginationReducer(1, nextQuestion())).toEqual(2)
    })
  })

  describe('when reducing Previous action', () => {
    it('should subtract the quiz index by one on a previous action', () => {
      expect(quizPaginationReducer(3, previousQuestion())).toEqual(2)
      expect(quizPaginationReducer(2, previousQuestion())).toEqual(1)
      expect(quizPaginationReducer(1, previousQuestion())).toEqual(0)
    })
  })
})
