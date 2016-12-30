// @flow
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchQuiz } from '../fetchQuizActions'
import quizSerivce from '../../services/quizService'
import { quizName, quizDATA } from '../../quizJSON'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('FetchQuiz Action', () => {
  beforeEach(() => {
    spyOn(quizSerivce, 'getQuizName').and.returnValue(quizName)
    spyOn(quizSerivce, 'getQuizData').and.returnValue(quizDATA)
  })

  it('should create a recieve quiz action with the correct quiz data', () => {
    const store = mockStore({})

    store.dispatch(fetchQuiz())

    expect(store.getActions()[0].payload.quizName).toEqual(quizName)
    expect(store.getActions()[0].payload.quizQuestions).toEqual(quizDATA)
    expect(store.getActions()[0].payload.quizLength).toEqual(quizDATA.length)
  })
})
