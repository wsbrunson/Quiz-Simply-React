// @flow
import React from 'react';
import styled from 'styled-components';

export type TypeChoicePropTypes = {
  text: string,
  questionId: number,
  id: number,
};

const Choice = ({ text, questionId, id }: TypeChoicePropTypes) => {
  const htmlId = `choice-${questionId}-${id}`;
  const htmlName = `question-${questionId}`;
  return (
    <li className="choice">
      <input type="radio" name={htmlName} id={htmlId} />
      <Label htmlFor={htmlId}>
        {text}
      </Label>
    </li>
  );
};

const Label = styled.label`padding-left: 0.5em;`;

export default Choice;
