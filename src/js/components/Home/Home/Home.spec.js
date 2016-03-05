import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Home from './Home';

const renderer = createRenderer();
renderer.render(React.createElement(Home, {}));

const component = renderer.getRenderOutput();

describe('Home Component', () => {
	it('should correctly render', () => {
		expect(component.props.className).toBe('home');
		expect(component.props.children.length).toBe(3);
	});
});
