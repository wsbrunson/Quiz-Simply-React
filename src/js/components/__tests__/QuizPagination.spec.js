// @flow
import React from 'react'
import { mount } from 'enzyme'

import QuizPagination from '../QuizPagination'

describe('Quiz Pagination', () => {
  let Component
  let nextQuestion
  let previousQuestion

  beforeEach(() => {
    nextQuestion = jest.fn()
    previousQuestion = jest.fn()

    Component = mount(
      <QuizPagination
        nextQuestion={nextQuestion}
        previousQuestion={previousQuestion}
      />
    )
  })

  describe('when the next question button is clicked', () => {
    it('should call the next question action', () => {
      Component.find('.pagination-next-button').simulate('click')
      expect(nextQuestion).toHaveBeenCalled()
    })
  })

  describe('when the previous question button is clicked', () => {
    it('should call the previous question action', () => {
      Component.find('.pagination-previous-button').simulate('click')
      expect(previousQuestion).toHaveBeenCalled()
    })
  })
})
