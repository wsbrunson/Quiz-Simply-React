// @flow
import React from 'react'
import { shallow } from 'enzyme'

import Question from '../Question'
import ChoiceContainer from '../../containers/ChoiceContainer'

describe('Question Component', () => {
  let ComponentWithSingleChoice
  let ComponentWithMultipleChoices
  let question1Text
  let question2Text
  let answer
  let answers
  let saveSelection

  beforeEach(() => {
    question1Text = 'Question 1'
    question2Text = 'Question 2'
    answer = [
      {
        id: '1',
        questionId: '0',
        title: 'Choice 1'
      }
    ]
    answers = [
      {
        id: '1',
        questionId: '0',
        title: 'Choice 1'
      },
      {
        id: '2',
        questionId: '0',
        title: 'Choice 2'
      },
      {
        id: '3',
        questionId: '0',
        title: 'Choice 3'
      }
    ]
    saveSelection = jest.fn()

    const createComponent = (answersArray, text) => (
      shallow(
        <Question
          choices={answersArray}
          questionText={text}
          saveSelection={saveSelection}
        />
      )
    )

    ComponentWithSingleChoice = createComponent(answer, question1Text)
    ComponentWithMultipleChoices = createComponent(answers, question2Text)
  })

  it('should render', () => {
    expect(ComponentWithSingleChoice.length).toBeTruthy()
    expect(ComponentWithMultipleChoices.length).toBeTruthy()

    expect(ComponentWithSingleChoice.find('h3').text()).toBe(question1Text)
    expect(ComponentWithMultipleChoices.find('h3').text()).toBe(question2Text)
  })

  it('should render ChoiceContainers for questions', () => {
    expect(ComponentWithSingleChoice.find(ChoiceContainer).length).toBe(1)
    expect(ComponentWithMultipleChoices.find(ChoiceContainer).length).toBe(3)
  })
})
