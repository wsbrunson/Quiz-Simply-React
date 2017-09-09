import { collectPuts, throwError } from 'redux-saga-test-engine';
import { call, put } from 'redux-saga/effects';

import { fetchQuizWorker } from '../fetchQuizSaga';

import { fetchQuiz } from '../../services/quizService';
import {
  requestQuiz,
  requestQuizSucceeded,
  requestQuizFailed,
} from '../../quiz/quizActions';

xdescribe('Fetch Quiz Saga', () => {
  describe('when quiz fetch succeeds', () => {
    it('should follow the fetch quiz succeeds pattern', () => {});
    const quiz = { questions: ['the quiz'] };
    const ENV = [[call(fetchQuiz), quiz]];

    const actual = collectPuts(fetchQuizWorker, ENV, requestQuiz());
    const expected = [put(requestQuizSucceeded(quiz.questions))];

    expect(expected).toEqual(actual);
  });

  describe('when quiz fetch failes', () => {
    it('should follow the fetch quiz failed pattern', () => {});
    const ENV = [[call(fetchQuiz), throwError()]];

    const actual = collectPuts(fetchQuizWorker, ENV, requestQuiz());
    const expected = [put(requestQuizFailed())];

    expect(expected).toEqual(actual);
  });
});
