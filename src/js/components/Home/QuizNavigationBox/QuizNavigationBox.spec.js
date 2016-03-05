import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import QuizNavigationBox from './QuizNavigationBox';

const renderer = createRenderer();
renderer.render(React.createElement(QuizNavigationBox, {
	info.title = 'title 1',
	info.buttonText = 'buttonText 1'
}));

const component = renderer.getRenderOutput();

describe('Home Component', () => {
	it('should correctly render', () => {
		expect(component.props.className).toBe('quiz-navigation-box');
		expect(component.props.children.length).toBe(3);
	});
});
