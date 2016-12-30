// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../actions/fetchQuizActions'
import { nextQuestion, previousQuestion } from '../actions/quizPaginationActions'
import { getQuestionAtIndex } from '../reducers/quizPaginationReducer'

import QuizPagination from '../components/QuizPagination'
import Quiz from '../components/Quiz'

import type { TypeQuestion } from '../types/quiz.flow'

type TypeQuizContainerPropTypes = {
  fetchQuiz: Function,
  nextQuestion: Function,
  previousQuestion: Function,
  quizName: string,
  quizQuestions: TypeQuestion[]
}

class QuizContainer extends Component {
  propTypes: TypeQuizContainerPropTypes

  componentDidMount () {
    this.props.fetchQuiz()
  }

  render () {
    return (
      <div>
        <Quiz
          quizName={this.props.quizName}
          quizQuestions={this.props.quizQuestions}
          fetchQuiz={this.props.fetchQuiz}
        />
        <QuizPagination
          nextQuestion={this.props.nextQuestion}
          previousQuestion={this.props.previousQuestion}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ quizPaginationReducer, fetchQuizReducer }) => ({
  quizName: fetchQuizReducer.quizName,
  quizQuestions: getQuestionAtIndex(
    fetchQuizReducer.quizQuestions,
    quizPaginationReducer
  )
})

const QuizContainerConnected = connect(
  mapStateToProps,
  {
    fetchQuiz,
    nextQuestion,
    previousQuestion
  }
)(QuizContainer)

export default QuizContainerConnected
