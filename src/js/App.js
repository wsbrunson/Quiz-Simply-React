import React from 'react';

import Quiz from './Quiz';

const propTypes = {
	quizData: React.PropTypes.array.isRequired,
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selections: [],
		};
	}

	render() {
		return (
			<Quiz
				quizData={this.props.quizData}
				quizName={'Test Quiz'}
				saveSelection={this.saveSelection}
			/>
		);
	}
}

App.propTypes = propTypes;

export default App;
