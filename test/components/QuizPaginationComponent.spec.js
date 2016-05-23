import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../fakeData/storeFake';
import QuizPaginationComponent from '../../src/js/components/QuizPaginationComponent';
import Quiz from '../../src/js/components/Quiz';

import { quizName, quizQuestions } from '../fakeData/quizFake';

xdescribe('Quiz Pagination Component', () => {
	let Component;

	beforeEach(() => {
		const store = storeFake({});

		const wrapper = mount(
			<Provider store={store}>
				<QuizPaginationComponent
					quizName={quizName}
					quizQuestions={quizQuestions}
				/>
			</Provider>
		);

		Component = wrapper.find(QuizPaginationComponent);
	});

	it('should render a Quiz', () => {
		expect(Component.find(Quiz).length).toBeTruthy();
	});
});
