import React from 'react';
import { shallow } from 'enzyme';

import Question from '../../src/js/components/Question';
import ChoiceContainer from '../../src/js/containers/ChoiceContainer';

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

		const createComponent = (answersArray, text) => (
			shallow(
				<Question
					answers={answersArray}
					questionText={text}
					saveSelection={saveSelection}
				/>
			)
		);

		ComponentWithSingleChoice = createComponent(answer, question1Text);
		ComponentWithMultipleChoices = createComponent(answers, question2Text);
	});

	it('should render', () => {
		expect(ComponentWithSingleChoice.length).toBeTruthy();
		expect(ComponentWithMultipleChoices.length).toBeTruthy();

		expect(ComponentWithSingleChoice.find('h3').text()).toBe(question1Text);
		expect(ComponentWithMultipleChoices.find('h3').text()).toBe(question2Text);
	});

	it('should render ChoiceContainers for questions', () => {
		expect(ComponentWithSingleChoice.find(ChoiceContainer).length).toBe(1);
		expect(ComponentWithMultipleChoices.find(ChoiceContainer).length).toBe(3);
	});
});
