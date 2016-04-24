import React from 'react';
import { shallow } from 'enzyme';
import Home from 'components/HomeComponent';

describe('Home Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Home />);
	});

	it('should correctly render', () => {
		expect(component).toBeTruthy();
	});

	it('should have three children', () => {
		expect(component.children().length).toBe(3);
	});
});
