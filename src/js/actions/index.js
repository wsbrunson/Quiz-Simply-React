export const addSelection = (question, answer) => {
	return {
		type: 'ADD_SELECTION',
		question,
		answer,
	};
};
