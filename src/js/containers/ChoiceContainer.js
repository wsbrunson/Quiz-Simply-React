import { connect } from 'react-redux';
import { addSelection } from '../actions';
import Choice from '../Choice';

const mapStateToProps = () => {
	return {
		something: false,
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
