// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../actions/fetchQuizActions";
import {
  nextQuestion,
  previousQuestion
} from "../actions/quizPaginationActions";
import { getQuestionAtIndex } from "../reducers/quizPaginationReducer";

import QuizPagination from "../components/QuizPagination";
import Quiz from "../components/Quiz";

import type { TypeQuestion } from "../types/quiz.flow";

type TypeQuizContainerPropTypes = {
  fetchQuiz: Function,
  nextQuestion: Function,
  previousQuestion: Function,
  quizName: string,
  quizQuestions: TypeQuestion[]
};

/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
class QuizContainer extends Component {
  propTypes: TypeQuizContainerPropTypes;

  componentDidMount() {
    this.props.fetchQuiz();
  }

  render() {
    const {
      quizName,
      quizQuestions,
      fetchQuiz,
      nextQuestion,
      previousQuestion
    } = this.props;

    return (
      <div>
        <Quiz
          quizName={quizName}
          quizQuestions={quizQuestions}
          fetchQuiz={fetchQuiz}
        />
        <QuizPagination
          nextQuestion={nextQuestion}
          previousQuestion={previousQuestion}
        />
      </div>
    );
  }
}
/* eslint-enable react/prop-types */
/* eslint-enable no-shadow */
const mapStateToProps = ({ quizPaginationReducer, fetchQuizReducer }) =>
  ({
    quizName: fetchQuizReducer.quizName,
    quizQuestions: getQuestionAtIndex(
      fetchQuizReducer.quizQuestions,
      quizPaginationReducer
    )
  });

const QuizContainerConnected = connect(mapStateToProps, {
  fetchQuiz,
  nextQuestion,
  previousQuestion
})(QuizContainer);

export default QuizContainerConnected;
