import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { storeFake } from '../fakeData/storeFake';
import ChoiceContainer from '../../src/js/containers/ChoiceContainer';

describe('ChoiceContainer', () => {
	let Component;

	beforeEach(() => {
		const store = storeFake({ selections: [] });

		const wrapper = shallow(
			<Provider store={store}>
				<ChoiceContainer />
			</Provider>
		);

		Component = wrapper.find(ChoiceContainer);
	});

	it('should render', () => {
		expect(Component.length).toBe(1);
	});

	it('should something', () => {

	});
});
