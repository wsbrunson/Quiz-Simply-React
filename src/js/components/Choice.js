// @flow
import React from "react";

export type TypeChoicePropTypes = {
  saveSelection: Function,
  choiceText: string,
  questionNumber: string,
  choiceNumber: string
};

const Choice = (
  {
    saveSelection,
    choiceText,
    questionNumber,
    choiceNumber
  }: TypeChoicePropTypes
) => (
  <li className="choice">
    <input
      type="radio"
      id={`${questionNumber}-${choiceNumber}`}
      name={questionNumber}
      onClick={saveSelection}
    />
    <label
      htmlFor={`${questionNumber}-${choiceNumber}`}
      className="choice-text"
    >
      {choiceText}
    </label>
  </li>
);

export default Choice;
