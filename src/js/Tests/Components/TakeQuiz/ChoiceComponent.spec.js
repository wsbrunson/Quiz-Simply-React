import React from 'react';
import { shallow } from 'enzyme';
import Choice from 'components/TakeQuiz/ChoiceComponent';

describe('Choice Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Choice />);
	});

	it('should correctly render', () => {
		expect(component).toBeTruthy();
	});
});

