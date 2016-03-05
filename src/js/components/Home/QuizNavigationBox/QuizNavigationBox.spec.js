import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import QuizNavigationBox from './QuizNavigationBox';

const shallowRenderer = ReactTestUtils.createRenderer();

shallowRenderer.render(React.createElement(QuizNavigationBox, {}));

const component = shallowRenderer.getRenderOutput();

describe('Home Component', () => {
	it('should correctly render', () => {
		expect(component.props.className).toBe('quiz-navigation-box');
		expect(component.props.children.length).toBe(4);
	});
});
