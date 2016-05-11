import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/js/components/App';
import QuizContainer from '../../src/js/containers/QuizContainer';

describe('App Component', () => {
	let Component;

	beforeEach(() => {
		Component = shallow(<App />);
	});

	it('should render', () => {
		expect(Component).toBeTruthy();
	});

	it('should have a QuizContainer', () => {
		expect(Component.find(QuizContainer).length).toBeTruthy();
	});
});
