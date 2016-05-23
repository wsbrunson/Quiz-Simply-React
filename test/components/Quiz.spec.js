import React from 'react';
import { shallow } from 'enzyme';

import Quiz from '../../src/js/components/Quiz';
import Question from '../../src/js/components/Question';

import { quizQuestions } from '../fakeData/quizFake';

describe('Quiz Component', () => {
	let Component;
	let quizName;

	beforeEach(() => {
		quizName = 'Test Quiz';

		Component = shallow(
			<Quiz
				quizName={quizName}
				quizQuestions={quizQuestions}
			/>
		);
	});

	it('should render', () => {
		expect(Component.length).toBeTruthy();
	});

	it('should have a heading', () => {
		const heading = Component.find('h2');

		expect(heading.length).toBe(1);
		expect(heading.text()).toBe(quizName);
	});

	it('should have Questions', () => {
		expect(Component.find(Question).length).toBe(2);
	});

	xdescribe('when submitting the quiz for grading', () => {
		describe('and all question have been answered', () => {
			beforeEach(() => {
				spyOn(quizValidationUtilities, 'validateQuiz').and.returnValue(true);
				Component.find('.quiz-submitButton').simulate('click');
			});

			it('should validate the attempt', () => {

			});
		});
	});
});
