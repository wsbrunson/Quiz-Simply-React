// @flow
import React from 'react';
import styled from 'styled-components';

import ChoiceContainer from '../containers/ChoiceContainer';

import type { TypeChoice } from '../../types/TypeQuiz.flow';

type TypeProps = {
  text: string,
  choices: TypeChoice[],
};

const renderChoices = (choice: TypeChoice) =>
  <ChoiceContainer key={choice.id} {...choice} />;

const Question = ({ text, choices = [] }: TypeProps) =>
  <QuestionMain>
    <QuestionTitle>
      {text}
    </QuestionTitle>
    <UnorderedList>
      {choices.map(renderChoices)}
    </UnorderedList>
  </QuestionMain>;

const QuestionMain = styled.li``;

const QuestionTitle = styled.h3`
  text-align: center;
  background-color: darkblue;
  color: lightgoldenrodyellow;
  padding: 0.5em;
  box-shadow: 0.5em -0.5em cyan;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 1.2em;
`;

export default Question;
