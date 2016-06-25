import { connect } from 'react-redux';
import addSelection from '../actions/addSelectionAction';
import { checkIfSelected } from '../reducers/selectionsReducer';

import Choice from '../components/Choice';

const mapStateToProps = (state, ownProps) => ({
	isSelected: checkIfSelected(state.selections, {
		question: ownProps.questionNumber,
		choice: ownProps.choiceNumber,
	}),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	saveSelection: () => {
		dispatch(addSelection(ownProps.questionNumber, ownProps.choiceNumber));
	},
});

const ChoiceContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Choice);

export default ChoiceContainer;
