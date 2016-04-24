import React from 'react';
import { browserHistory } from 'react-router';
import { shallow } from 'enzyme';
import QuizNavigationBox from 'components/QuizNavigationBoxComponent';

const infoWithNavId = {
	title: 'title 1',
	buttonText: 'buttonText 1',
	url: 'go-here/',
	navigationInputValue: 'quiz1',
};

const infoWithoutNavId = {
	title: 'title 1',
	buttonText: 'buttonText 1',
	url: 'go-here/',
};

const fakeBlurEvent = {
	target: {
		value: 'quiz2',
	},
};

describe('QuizNavigationBox Component', () => {
	describe('when a navigationInputValue is supplied', () => {
		let component;

		beforeEach(() => {
			spyOn(browserHistory, 'push');

			component = shallow(<QuizNavigationBox info={infoWithNavId} />);
		});

		it('should correctly render', () => {
			expect(component).toBeTruthy();
		});

		it('should render the title', () => {
			expect(component.find('h4').text()).toEqual('title 1');
		});

		it('should render the button text', () => {
			expect(component.find('button').text()).toEqual('buttonText 1');
		});

		describe('when goToQuizState button clicked', () => {
			beforeEach(() => {
				component.find('button').simulate('click');
			});

			it('should navigate to a state with a quizId', () => {
				expect(browserHistory.push).toHaveBeenCalledWith(null, 'go-here/quiz1');
			});
		});
	});

	describe('when a navigationInputValue is not supplied', () => {
		let component;

		beforeEach(() => {
			spyOn(browserHistory, 'push');

			component = shallow(<QuizNavigationBox info={infoWithoutNavId} />);
		});

		describe('when goToQuizState button clicked with text in the text input', () => {
			beforeEach(() => {
				component.find('input').simulate('blur', fakeBlurEvent);
				component.find('button').simulate('click');
			});

			it('should navigate to a state with a quizId', () => {
				expect(browserHistory.push).toHaveBeenCalledWith(null, 'go-here/quiz2');
			});
		});
	});
});
