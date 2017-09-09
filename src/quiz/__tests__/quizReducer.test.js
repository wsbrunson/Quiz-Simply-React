import quizReducer from '../quizReducer';

import * as quizActions from '../quizActions';

describe('Quiz Reducer', () => {
  describe('requestQuizSucceeded', () => {
    it('should add questions to state', () => {
      const state = quizReducer(
        undefined,
        quizActions.requestQuizSucceeded({
          0: {
            id: 0,
          },
        }),
      );

      expect(state).toMatchSnapshot();
    });
  });

  describe('selectChoice', () => {
    it('should add selection', () => {
      const state = quizReducer(
        undefined,
        quizActions.selectChoice({
          '0': '0',
        }),
      );

      expect(state).toMatchSnapshot();
    });

    it('should handle multiple selections', () => {
      const firstSelection = quizReducer(
        undefined,
        quizActions.selectChoice({
          '0': '0',
        }),
      );

      const nextSelection = quizReducer(
        firstSelection,
        quizActions.selectChoice({
          '1': '0',
        }),
      );

      expect(nextSelection).toMatchSnapshot();
    });

    it('should handle multiple selections on the same id', () => {
      const firstSelection = quizReducer(
        undefined,
        quizActions.selectChoice({
          '0': '0',
        }),
      );

      const nextSelection = quizReducer(
        firstSelection,
        quizActions.selectChoice({
          '0': '1',
        }),
      );

      expect(nextSelection).toMatchSnapshot();
    });
  });
});
