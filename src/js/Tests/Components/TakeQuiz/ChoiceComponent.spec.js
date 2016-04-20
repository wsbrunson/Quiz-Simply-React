import React from 'react';
import { shallow } from 'enzyme';
import Choice from '../../../Components/TakeQuiz/ChoiceComponent';

describe('Choice Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Choice />);
	});

	it('should correctly render', () => {
		expect(component).toBeTruthy();
	});
 
    describe('Rendering', () => {
        let componentInput
        
        beforeEach(() => {
            componentInput = component.find('input');
        })
        fit('should do something', () => {
            console.log(componentInput);
        })
    })
});

