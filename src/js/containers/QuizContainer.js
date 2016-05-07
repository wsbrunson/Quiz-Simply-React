import { connect } from 'react-redux';

import Quiz from '../components/Quiz';

import quizService from '../services/quizService';

const mapStateToProps = () => {
	return {
		quizName: quizService.getQuizName(),
		quizData: quizService.getQuizData(),
	};
};

const mapDispatchToProps = () => {
	return {};
};

const QuizContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Quiz);

export default QuizContainer;
