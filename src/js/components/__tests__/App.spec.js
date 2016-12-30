// @flow
import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

describe('App Component', () => {
  let Component

  beforeEach(() => {
    Component = shallow(<App />)
  })

  it('should render', () => {
    expect(Component).toBeTruthy()
  })
})
