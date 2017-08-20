// @flow
import React, { Component } from 'react';
import type {
  TypeQuestionsArray,
  TypeQuestion,
} from '../../types/TypeQuiz.flow';

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
    <Question
      key={question.id}
      text={question.text}
      choices={question.answers}
    />;

  render() {
    return (
      <div className="quiz">
        <h2 className="quiz-name">Fun Time Quiz</h2>
        <ul>
          {this.props.questions.map(this.renderQuestions)}
        </ul>
      </div>
    );
  }
}

export default Quiz;
