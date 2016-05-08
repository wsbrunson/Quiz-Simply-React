const defaultState = {
	hasBeenSubmitted: false,
};

const submitQuizReducer = (state = defaultState, actions) => {
	return { hasBeenSubmitted: actions.hasBeenSubmitted };
};

export default submitQuizReducer;
