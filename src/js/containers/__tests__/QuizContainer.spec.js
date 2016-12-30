// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import quizPaginationReducer from '../../reducers/quizPaginationReducer'
import fetchQuizReducer from '../../reducers/fetchQuizReducer'
import QuizContainer from '../QuizContainer'
import Quiz from '../../components/Quiz'
import QuizPagination from '../../components/QuizPagination'

import quizService from '../../services/quizService'
import { quizName, quizQuestions } from '../../../../test/fakeData/quizFake'

describe('QuizContainer', () => {
  let QuizComponent
  let QuizPagComponent

  beforeEach(() => {
    spyOn(quizService, 'getQuizName').and.returnValue(quizName)
    spyOn(quizService, 'getQuizData').and.returnValue(quizQuestions)

    const store = createStore(
      combineReducers({ quizPaginationReducer, fetchQuizReducer }),
      applyMiddleware(thunkMiddleware)
    )
    const wrapper = mount(
      <Provider store={store}>
        <QuizContainer />
      </Provider>
    )
    QuizComponent = wrapper.find(Quiz)
    QuizPagComponent = wrapper.find(QuizPagination)
  })

  it('should fetch quiz when loaded', () => {
    expect(quizService.getQuizName).toHaveBeenCalled()
    expect(quizService.getQuizData).toHaveBeenCalled()
  })

  it('should render the quiz with a quiz name from the quiz data', () => {
    expect(QuizComponent.prop('quizName')).toBe(quizName)
  })

  xit('should render a question', () => {
    expect(QuizComponent.find('h3').text()).toBe(quizQuestions[0].text)
  })

  it('should fetch quiz when loaded', () => {
    expect(quizService.getQuizName).toHaveBeenCalled()
    expect(quizService.getQuizData).toHaveBeenCalled()
  })

  xdescribe('> QuizPagination Component', () => {
    let nextButton
    let questionText

    function getUpdatedText () {
      return QuizComponent.find('h3').text()
    }

    describe('when clicking the next button', () => {
      beforeEach(() => {
        nextButton = QuizPagComponent.find('.pagination-next-button')
        nextButton.simulate('click')
      })

      it('should navigate to the next question', () => {
        expect(getUpdatedText()).toBe(quizQuestions[1].text)
      })

      it('should not navigate to the next question when there are none left', () => {
        nextButton.simulate('click')

        expect(getUpdatedText()).toBe(quizQuestions[1].text)
      })
    })

    describe('when clicking the previous button', () => {
      it('should navigate to the previous question', () => {
        QuizPagComponent.find('.pagination-next-button').simulate('click')
        questionText = QuizComponent.find('h3').text()
        expect(questionText).toBe(quizQuestions[1].text)

        QuizPagComponent.find('.pagination-previous-button').simulate('click')
        questionText = QuizComponent.find('h3').text()
        expect(questionText).toBe(quizQuestions[0].text)
      })

      it('should not navigate to the previous question when on the first question', () => {
        QuizPagComponent.find('.pagination-previous-button').simulate('click')
        questionText = QuizComponent.find('h3').text()
        expect(questionText).toBe(quizQuestions[0].text)
      })
    })
  })
})
