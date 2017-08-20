// @flow
import React from 'react';

import type { TypeChoice } from '../../types/TypeQuiz.flow';

type TypeProps = {
  text: string,
  choices: TypeChoice[],
};

const Question = ({ text, choices = [] }: TypeProps) =>
  <li className="question">
    <h3 className="question-text">
      {text}
    </h3>
    <ul className="answers" />
  </li>;

export default Question;
