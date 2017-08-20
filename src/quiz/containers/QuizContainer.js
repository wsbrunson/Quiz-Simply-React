// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Quiz from '../components/Quiz';

import { requestQuiz } from '../quizActions';
import { getAllQuestions } from '../quizSelectors';

const mapStateToProps = state => ({
  questions: getAllQuestions(state),
});

export default withRouter(
  connect(mapStateToProps, {
    requestQuiz,
  })(Quiz),
);
