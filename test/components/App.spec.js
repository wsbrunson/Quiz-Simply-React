import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/js/components/App';
import Quiz from '../../src/js/components/Quiz';

import { quizFake } from '../fakeData/quizFake';

describe('App Component', () => {
	let Component;

	beforeEach(() => {
		Component = shallow(<App quizData={quizFake} />);
	});

	it('should render', () => {
		expect(Component).toBeTruthy();
	});

	it('should have a Quiz', () => {
		expect(Component.find(Quiz).length).toBeTruthy();
	});
});
