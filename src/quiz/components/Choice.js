// @flow
import React from 'react';
import styled from 'styled-components';

import type { TypeSelectionsMap } from '../../types/TypeQuiz.flow';

export type TypeChoicePropTypes = {
  text: string,
  questionId: number,
  id: number,
  selectChoice: (selection: TypeSelectionsMap) => void,
};

const Choice = ({
  text,
  questionId,
  id,
  selectChoice,
}: TypeChoicePropTypes) => {
  const htmlId = `choice-${questionId}-${id}`;
  const htmlName = `question-${questionId}`;
  const onSelectChoice = () =>
    selectChoice({
      [questionId]: id,
    });

  return (
    <li className="choice">
      <input
        type="radio"
        name={htmlName}
        id={htmlId}
        onClick={onSelectChoice}
      />
      <Label htmlFor={htmlId}>
        {text}
      </Label>
    </li>
  );
};

const Label = styled.label`padding-left: 0.5em;`;

export default Choice;
