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

		const createComponent = (quizName) => {
			return shallow(
				<Quiz
					quizName={quizName}
					quizData={quizQuestions}
				/>
			);
		};

		Component = createComponent(quizName);
	});

	it('should render', () => {
		expect(Component.length).toBeTruthy();
	});

	it('should have a heading', () => {
		const heading = Component.find('.heading');

		expect(heading.length).toBeTruthy();
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
