// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import { storeFake } from '../../../../test/fakeData/storeFake'
import ChoiceContainer from '../ChoiceContainer'
import Choice from '../../components/Choice'

describe('Choice Container', () => {
  describe('when a choice is in the selection array', () => {
    let ChoiceComponent

    beforeEach(() => {
      const fakeSelection = {
        question: 6,
        choice: 7
      }

      const text = 'fake choice'

      const store = storeFake({ selections: [fakeSelection] })

      const wrapper = mount(
        <Provider store={store}>
          <ChoiceContainer
            questionNumber={6}
            choiceNumber={7}
            choiceText={text}
          />
        </Provider>
      )

      ChoiceComponent = wrapper.find(Choice)
    })

    it('should tell the Choice component it is selected', () => {
      expect(ChoiceComponent.prop('isSelected')).toBeTruthy()
    })
  })

  describe('when a choice is not in the selection array', () => {
    let Component
    let ChoiceComponent

    beforeEach(() => {
      const fakeSelection = {
        question: 1,
        choice: 3
      }

      const store = storeFake({ selections: [fakeSelection] })

      const wrapper = mount(
        <Provider store={store}>
          <ChoiceContainer
            questionNumber={2}
            choiceNumber={7}
            choiceText='fake text'
          />
        </Provider>
      )

      Component = wrapper.find(ChoiceContainer)
      ChoiceComponent = Component.find(Choice)
    })

    it('should tell the Choice component it is not selected', () => {
      expect(ChoiceComponent.prop('isSelected')).toBeFalsy()
    })
  })
})
