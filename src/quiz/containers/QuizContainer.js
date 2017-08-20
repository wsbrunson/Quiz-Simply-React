// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Quiz from '../components/Quiz';

import { requestQuiz } from '../quizActions';
import { getAllQuestions } from '../quizSelectors';

import type { TypeStore } from '../../types/TypeStore.flow';

const mapStateToProps = (state: TypeStore) => ({
  questions: getAllQuestions(state),
});

export default withRouter(
  connect(mapStateToProps, {
    requestQuiz,
  })(Quiz),
);
