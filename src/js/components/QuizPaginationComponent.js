import React from 'react';


const propTypes = {
	nextQuestion: React.PropTypes.func.isRequired,
	previousQuestion: React.PropTypes.func.isRequired,
};

const QuizPaginationComponent = (props) => {
	return (
		<div>
			<label>PREVIOUS
				<input
					type="button"
					onClick={props.previousQuestion}
					className="pagination-previous-button"
					placeholder="PREVIOUS"
				/>
			</label>
			<label>NEXT
				<input
					type="button"
					onClick={props.nextQuestion.bind(this, props.quizLength)}
					className="pagination-next-button"
					placeholder="NEXT"
				/>
			</label>
		</div>
	);
};

QuizPaginationComponent.propTypes = propTypes;

export default QuizPaginationComponent;
