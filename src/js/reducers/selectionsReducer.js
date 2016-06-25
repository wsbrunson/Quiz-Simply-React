import compareObjects from 'deep-equal';

const selectionsReducer = (state = [], actions) => {
	return state.filter(selection => {
		return selection.question !== actions.question;
	})
	.concat(actions);
};

export default selectionsReducer;

export const checkIfSelected = (selections = [], ownChoice) => {
	return selections.filter(selection => {
		return compareObjects(selection, ownChoice);
	}).length;
};

// const selections = (state = [], action) => {
// 	switch (action.type) {
// 	case 'ADD_SELECTION':
// 		return state.filter((selection) => {
// 			return selection.question !== action.question;
// 		})
// 		.concat(
// 			{
// 				question: action.question,
// 				answer: action.answer,
// 			}
// 		);
// 	default:
// 		return state;
// 	}
// };
//
// export default selections;
