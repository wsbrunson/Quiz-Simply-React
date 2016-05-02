import React from 'react';
import { mount } from 'enzyme';

import Question from '../src/js/Question';
import Choice from '../src/js/Choice';

describe('Question Component', () => {
	let ComponentWithSingleChoice;
	let ComponentWithMultipleChoices;
	let question1Text;
	let question2Text;
	let answer;
	let answers;
	let saveSelection;

	beforeEach(() => {
		question1Text = 'Question 1';
		question2Text = 'Question 2';
		answer = ['1'];
		answers = ['1', '2', '3'];
		saveSelection = jasmine.createSpy('save');

		ComponentWithSingleChoice = mount(
			<Question
				answers={answer}
				questionText={question1Text}
				saveSelection={saveSelection}
			/>
		);

		ComponentWithMultipleChoices = mount(
			<Question
				answers={answers}
				questionText={question2Text}
				saveSelection={saveSelection}
			/>
		);
	});

	it('should render', () => {
		expect(ComponentWithSingleChoice.length).toBeTruthy();
		expect(ComponentWithMultipleChoices.length).toBeTruthy();

		expect(ComponentWithSingleChoice.find('h3').text()).toBe(question1Text);
		expect(ComponentWithMultipleChoices.find('h3').text()).toBe(question2Text);
	});

	it('should render Choices for questions', () => {
		expect(ComponentWithSingleChoice.find(Choice).length).toBe(1);
		expect(ComponentWithMultipleChoices.find(Choice).length).toBe(3);
	});
});
