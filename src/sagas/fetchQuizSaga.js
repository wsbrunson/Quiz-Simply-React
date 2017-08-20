import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchQuiz } from '../services/quizService';
import {
  ActionTypes,
  requestQuizSucceeded,
  requestQuizFailed,
} from '../quiz/quizActions';

import type { TypeApiQuiz, TypeAppQuiz } from '../types/TypeQuiz.flow';

function* fetchQuizWorker() {
  try {
    const { questions }: TypeApiQuiz = yield call(fetchQuiz);
    const questionsMap: TypeAppQuiz = questions.reduce((map, question) => {
      map[question.id] = question;
      return map;
    }, {});
    yield put(requestQuizSucceeded(questionsMap));
  } catch (e) {
    yield requestQuizFailed();
  }
}

function* fetchQuizSaga() {
  yield takeLatest(ActionTypes.REQUEST_QUIZ, fetchQuizWorker);
}

export { fetchQuizWorker };

export default fetchQuizSaga;
