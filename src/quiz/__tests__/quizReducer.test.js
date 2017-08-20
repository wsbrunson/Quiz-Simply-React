import quizReducer from '../quizReducer';

import { requestQuizSucceeded } from '../quizActions';

describe('Quiz Reducer', () => {
  describe('requestQuizSucceeded', () => {
    it('should add questions to state', () => {
      const state = quizReducer(
        undefined,
        requestQuizSucceeded({
          0: {
            id: 0,
          },
        }),
      );

      expect(state).toMatchSnapshot();
    });
  });
});
