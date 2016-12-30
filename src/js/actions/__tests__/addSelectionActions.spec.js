// @flow
import { addSelection } from '../addSelectionActions'
import { ADD_SELECTION } from '../../constants/actionTypes'

describe('addSelection Action', () => {
  it('should return an addSelection action', () => {
    expect(addSelection('1', '1')).toEqual({ type: ADD_SELECTION, payload: { questionId: '1', choiceId: '1' } })
    expect(addSelection('2', '4')).toEqual({ type: ADD_SELECTION, payload: { questionId: '2', choiceId: '4' } })
    expect(addSelection('0', '0')).toEqual({ type: ADD_SELECTION, payload: { questionId: '0', choiceId: '0' } })
  })
})
