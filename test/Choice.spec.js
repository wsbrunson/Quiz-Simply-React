import React from 'react';
import { shallow } from 'enzyme';

import Choice from '../src/js/choice';

describe('Choice Component', () => {
	let Component1;
	let Component2;
	let choice1;
	let choice2;
	let saveSelection;

	beforeEach(() => {
		choice1 = 'Choice 1';
		choice2 = 'Choice 2';
		saveSelection = jasmine.createSpy('saveSelection');

		Component1 = shallow(
			<Choice
				choiceIndex={0}
				saveSelection={saveSelection}
				choiceText={choice1}
			/>
		);

		Component2 = shallow(
			<Choice
				choiceIndex={0}
				saveSelection={saveSelection}
				choiceText={choice2}
			/>
		);
	});

	it('should render', () => {
		expect(Component1.length).toBeTruthy();
		expect(Component2.length).toBeTruthy();

		expect(Component1.find('label').text()).toBe(choice1);
		expect(Component2.find('label').text()).toBe(choice2);
	});

	it('should call saveSelection when clicked', () => {
		Component1.find('input').simulate('click');

		expect(saveSelection).toHaveBeenCalled();
	});
});
