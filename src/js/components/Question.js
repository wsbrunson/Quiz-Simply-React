// @flow
import React from 'react'

import ChoiceContainer from '../containers/ChoiceContainer'

import type { TypeChoice } from '../types/quiz.flow'

type TypeQuestionPropTypes = {
  questionText: string,
  choices: TypeChoice[]
}

const renderChoices = ({ title, id, questionId }, index) => (
  <ChoiceContainer
    key={index}
    choiceTitle={title}
    questionId={questionId}
    choiceId={id}
  />
)

const Question = ({ questionText, choices = [] }: TypeQuestionPropTypes) => (
  <li className='question'>
    <h3 className='question-text'>{questionText}</h3>
    <ul className='answers'>
      {choices.map(renderChoices)}
    </ul>
  </li>
)

export default Question
