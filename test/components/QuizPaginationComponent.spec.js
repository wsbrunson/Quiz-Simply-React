import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../fakeData/storeFake';
import QuizPagination from '../../src/js/components/QuizPaginationComponent';
import Quiz from '../../src/js/components/Quiz';
import Question from '../../src/js/components/Question';

import { quizName, quizQuestions } from '../fakeData/quizFake';

describe('Quiz Pagination Component', () => {
	let Component;

	beforeEach(() => {
		const store = storeFake({});

		const wrapper = mount(
			<Provider store={store}>
				<QuizPagination
					quizName={quizName}
					quizData={quizQuestions}
				/>
			</Provider>
		);

		Component = wrapper.find(QuizPagination);
	});

	it('should render a Quiz', () => {
		expect(Component.find(Quiz).length).toBeTruthy();
	});

	it('should render one question', () => {
		expect(Component.find(Question).length).toBe(1);
	});
});
