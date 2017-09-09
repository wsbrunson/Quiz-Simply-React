// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import type {
  TypeQuestionsArray,
  TypeQuestion,
} from '../../types/TypeQuiz.flow';

import QuizActionsContainer from '../containers/QuizActionsContainer';
import Question from './Question';

type TypeProps = {
  questions: TypeQuestionsArray,
  requestQuiz: () => void,
};

class Quiz extends Component<TypeProps> {
  defaultProps = {
    questions: [],
  };

  componentDidMount() {
    this.props.requestQuiz();
    console.log('mount');
  }

  renderQuestions = (question: TypeQuestion) =>
    <Question key={question.id} {...question} />;

  render() {
    return (
      <QuizMain>
        <QuizLeft>
          <QuizTitle>Fun Time Quiz</QuizTitle>
        </QuizLeft>
        <QuizRight>
          <ol>
            {this.props.questions.map(this.renderQuestions)}
          </ol>
          <QuizActionsContainer />
        </QuizRight>
      </QuizMain>
    );
  }
}

const QuizMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgoldenrodyellow;
`;

const QuizLeft = styled.div`width: 35%;`;

const QuizTitle = styled.h2`
  text-align: right;
  text-transform: uppercase;
`;

const QuizRight = styled.div`width: 45%;`;

export default Quiz;
