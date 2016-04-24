import React from 'react';
import { shallow } from 'enzyme';

import TakeQuiz from 'components/TakeQuiz/TakeQuizComponent';
import UserAlert from 'components/UserAlertComponent'
import Quiz from 'components/TakeQuiz/QuizComponent';
import Score from 'components/TakeQuiz/ScoreComponent';

fdescribe('TakeQuiz Component', () => {
	let component;

  describe('when the quiz has not been submitted', () => {
    beforeEach(() => {      
      component = shallow(<TakeQuiz hasBeenSubmitted={false} />);
    });
    
    it('should render the Quiz component', () => {
      expect(component.find(Quiz)).toBeTruthy();
    });
    
    describe('when an answer is selected', () => {
      beforeEach(() => {
        
      });
      
      it('should store an answer when clicked', () => {
        
      });
    });
    
    describe('when submitting and not all questions have been answered', () => {
      beforeEach(() => {
        spyOn(TakeQuiz, 'validateQuiz').and.returnValue(false);
        
        component.find('submit-class').simulate('click');
      });
      
      it('should not submit the quiz', () => {
        expect(component.find(UserAlert)).toBeTruthy();
      });
    });
    
    describe('when submitting an all questions have been answered', () => {
      beforeEach(() => {
        spyOn(TakeQuiz, 'validateQuiz').and.returnValue(true);
        
        component.find('submit-class').simulate('click');
      });
      
      it('should submit the quiz', () => {
        expect(component.find(Score)).toBeTruthy();
      });
    });
  });
  
  describe('when the quiz has been submitted', () => {
    beforeEach(() => {      
      component = shallow(<TakeQuiz hasBeenSubmitted={true} />);
    });
    
    it('should render the Score component', () => {
      expect(component.find(Score)).toBeTruthy();
    });
  });
});

