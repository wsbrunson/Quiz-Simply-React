import navigationHelper from 'helpers/NavigationHelper';

describe('NavigationHelper', () => {
	it('should return properties for the given state to navigate to', () => {
		const createQuiz = navigationHelper().createQuiz;

		expect(createQuiz.title).toEqual('Create a Quiz!');
		expect(createQuiz.buttonText).toEqual('Create!');
		expect(createQuiz.url).toEqual('/create-quiz/');
	});
});
