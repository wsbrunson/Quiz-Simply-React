// @flow
import { RECEIVE_QUIZ } from '../constants/actionTypes'
import quizSerivce from '../services/quizService'

import type { TypeThunk } from '../types/store.flow'
import type { TypeQuestion } from '../types/quiz.flow'

export type TypeReceiveQuizAction = {
  type: typeof RECEIVE_QUIZ,
  payload: {
    quizName: string,
    quizQuestions: TypeQuestion[],
    quizLength: number
  }
}
type TypeReceiveQuizParamters = {
  quizName: string,
  quizQuestions: TypeQuestion[]
}
export const receiveQuiz = ({
  quizName,
  quizQuestions = []
}: TypeReceiveQuizParamters): TypeReceiveQuizAction => ({
  type: RECEIVE_QUIZ,
  payload: {
    quizName,
    quizQuestions,
    quizLength: quizQuestions.length
  }
})

export const fetchQuiz = (): TypeThunk<*> => (dispatch) => (
  dispatch(receiveQuiz({
    quizName: quizSerivce.getQuizName(),
    quizQuestions: quizSerivce.getQuizData()
  }))
)
