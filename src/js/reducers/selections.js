const selections = (state = [], action) => {
	switch (action.type) {
	case 'ADD_SELECTION':
		return state.filter((selection) => {
			return selection.question !== action.question;
		})
		.concat(
			{
				question: action.question,
				answer: action.answer,
			}
		);
	default:
		return state;
	}
};

export default selections;
