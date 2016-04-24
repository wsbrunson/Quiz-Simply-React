import React from 'react';
import { browserHistory } from 'react-router';

class QuizNavigationBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navigationInputValue: props.info.navigationInputValue || '',
		};

		this.goToQuizState = this.goToQuizState.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onBlur(blurEvent) {
		const navigationInputValue = blurEvent.target.value;
		this.setState({ navigationInputValue });
	}

	goToQuizState() {
		browserHistory.push(null, `${this.props.info.url}${this.state.navigationInputValue}`);
	}

	render() {
		return (
			<div className="quiz-navigation-box">
				<h4 className="quiz-navigation-box-title">{this.props.info.title}</h4>
				<label>Enter the ID of the quiz you would like to take</label>
				<input
					className="quiz-navigation-box-input"
					type="text"
					required
					onBlur={this.onBlur}
				/>
				<button
					onClick={this.goToQuizState}
				>{this.props.info.buttonText}</button>
			</div>
		);
	}
}

QuizNavigationBox.PropTypes = {
	text: React.PropTypes.object.isRequired,
};
export default QuizNavigationBox;
