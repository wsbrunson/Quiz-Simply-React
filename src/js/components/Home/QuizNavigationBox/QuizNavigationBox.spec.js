import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import QuizNavigationBox from './QuizNavigationBox';

const info = {
	title: 'title 1',
	buttonText: 'buttonText 1',
};

const renderer = createRenderer();
renderer.render(<QuizNavigationBox info={info} />);

const component = renderer.getRenderOutput();

describe('QuizNavigationBox Component', () => {
	it('should correctly render', () => {
		expect(component.props.className).toBe('quiz-navigation-box');
		expect(component.props.children.length).toBe(4);
	});
});
