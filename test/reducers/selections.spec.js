import selections from '../../src/js/reducers/selections';

describe('Selections Reducer', () => {
	let oneChoice;
	let twoChoices;
	let question0choice1;
	let question0choice2;
	let question1choice3;
	let question1choice0;

	beforeEach(() => {
		question0choice1 = {
			question: 0,
			choice: 1,
		};

		question0choice2 = {
			question: 0,
			choice: 2,
		};

		question1choice3 = {
			question: 1,
			choice: 3,
		};

		question1choice0 = {
			question: 1,
			choice: 0,
		};

		oneChoice = selections(undefined, question0choice1);
		twoChoices = selections(oneChoice, question1choice3);
	});

	it('should add a selection', () => {
		expect(oneChoice).toEqual([question0choice1]);
	});

	it('should hold one selection per question', () => {
		expect(selections(oneChoice, question0choice2)).toEqual([question0choice2]);

		expect(selections(twoChoices, question1choice0)).toEqual([question0choice1, question1choice0]);
	});

	it('should add selections', () => {
		expect(selections(oneChoice, question1choice3)).toEqual([question0choice1, question1choice3]);
	});
});
