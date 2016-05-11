import React from 'react';
import { shallow } from 'enzyme';

import Choice from '../../src/js/components/Choice';

describe('Choice Component', () => {
	const choiceText = 'Choice 1';
	const saveSelection = jasmine.createSpy('saveSelection');
	let Component;

	beforeEach(() => {
		Component = shallow(
			<Choice
				choiceIndex={0}
				saveSelection={saveSelection}
				choiceText={choiceText}
			/>
		);
	});

	it('should render', () => {
		expect(Component.length).toBeTruthy();

		expect(Component.find('label').text()).toBe(choiceText);
	});

	it('should call saveSelection when clicked', () => {
		Component.find('input').simulate('click');

		expect(saveSelection).toHaveBeenCalled();
	});
});
