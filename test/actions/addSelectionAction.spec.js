import addSelection from '../../src/js/actions/addSelectionAction';
import { ADD_SELECTION } from '../../src/js/constants/actionTypes';

describe('addSelection Action', () => {
	it('should return an addSelection action', () => {
		expect(addSelection(1, 1)).toEqual({ type: ADD_SELECTION, question: 1, choice: 1 });
		expect(addSelection(2, 4)).toEqual({ type: ADD_SELECTION, question: 2, choice: 4 });
		expect(addSelection(0, 0)).toEqual({ type: ADD_SELECTION, question: 0, choice: 0 });
	});
});
