// @flow
import React from "react";

import Question from "./Question";

import type { TypeQuestion } from "../types/quiz.flow";

type TypeQuizPropTypes = { quizName: string, quizQuestions: TypeQuestion[] };

const renderQuestions = (question = {}, index) => (
  <Question
    key={index}
    questionText={question.title}
    choices={question.choices}
  />
);

const Quiz = ({ quizName, quizQuestions = [] }: TypeQuizPropTypes) => (
  <div className="quiz">
    <h2 className="quiz-name">{quizName}</h2>
    <ul>
      {quizQuestions.map(renderQuestions)}
    </ul>
  </div>
);

export default Quiz;
