const addSelection = (question, choice) => {
	return {
		type: 'ADD_SELECTION',
		question,
		choice,
	};
};

export default addSelection;
