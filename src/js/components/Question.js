// @flow
import React from "react";

import ChoiceContainer from "../containers/ChoiceContainer";

import type { TypeChoice } from "../types/quiz.flow";

type TypeQuestionPropTypes = { questionText: string, choices: TypeChoice[] };
type TypeChoiceContainerProps = {
  title: string,
  id: string,
  questionId: string
};

const renderChoices = (
  { title, id, questionId }: TypeChoiceContainerProps,
  index
) => (
  <ChoiceContainer
    key={index}
    choiceText={title}
    questionId={questionId}
    choiceId={id}
  />
);

const Question = ({ questionText, choices = [] }: TypeQuestionPropTypes) => (
  <li className="question">
    <h3 className="question-text">{questionText}</h3>
    <ul className="answers">
      {choices.map(renderChoices)}
    </ul>
  </li>
);

export default Question;
