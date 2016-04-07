export default () => {
	const createQuiz = {
		title: 'Create a Quiz!',
		buttonText: 'Create!',
		url: '/create-quiz/',
		navigationInputValue: '',
	};

	const takeQuiz = {
		title: 'Take a Quiz!',
		buttonText: 'Start Quiz!',
		url: '/take-quiz/example-quiz',
		navigationInputValue: '',
	};

	return {
		createQuiz,
		takeQuiz,
	};
};
