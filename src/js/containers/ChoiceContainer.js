import { connect } from 'react-redux';
import addSelection from '../actions/addSelection';
import compareObjects from 'deep-equal';

import Choice from '../components/Choice';

const checkIfSelected = (selections, ownChoice) => {
	return selections.filter(selection => {
		return compareObjects(selection, ownChoice);
	}).length;
};

const mapStateToProps = (state, ownProps) => {
	return {
		isSelected: checkIfSelected(state.selections, {
			question: ownProps.questionNumber,
			choice: ownProps.choiceNumber,
		}),
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		saveSelection: () => {
			dispatch(addSelection(ownProps.questionNumber, ownProps.choiceNumber));
		},
	};
};

const ChoiceContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Choice);

export default ChoiceContainer;
