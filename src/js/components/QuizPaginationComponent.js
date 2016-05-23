import React from 'react';


const propTypes = {
	nextQuestion: React.PropTypes.func.isRequired,
	previousQuestion: React.PropTypes.func.isRequired,
};

const QuizPaginationComponent = (props) => {
	return (
		<div>
			<button onClick={props.previousQuestion}></button>
			<button onClick={props.nextQuestion}></button>
		</div>
	);
};

QuizPaginationComponent.propTypes = propTypes;

export default QuizPaginationComponent;
