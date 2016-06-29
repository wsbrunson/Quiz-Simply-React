import React from 'react';
import { mount } from 'enzyme';

import QuizPaginationComponent from '../../src/js/components/QuizPaginationComponent';

describe('Quiz Pagination Component', () => {
	let Component;
	let nextQuestion;
	let previousQuestion;

	beforeEach(() => {
		nextQuestion = jasmine.createSpy('nextQuestion');
		previousQuestion = jasmine.createSpy('previousQuestion');

		Component = mount(
			<QuizPaginationComponent
				nextQuestion={nextQuestion}
				previousQuestion={previousQuestion}
			/>
		);
	});

	describe('when the next question button is clicked', () => {
		it('should call the next question action', () => {
			Component.find('.pagination-next-button').simulate('click');
			expect(nextQuestion).toHaveBeenCalled();
		});
	});

	describe('when the previous question button is clicked', () => {
		it('should call the previous question action', () => {
			Component.find('.pagination-previous-button').simulate('click');
			expect(previousQuestion).toHaveBeenCalled();
		});
	});
});
