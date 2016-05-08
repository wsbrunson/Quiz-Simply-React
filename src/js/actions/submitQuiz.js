const submitQuiz = (hasBeenSubmitted) => {
	return {
		type: 'SUBMIT_QUIZ',
		hasBeenSubmitted,
	};
};

export default submitQuiz;
