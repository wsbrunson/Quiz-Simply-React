import { connect } from 'react-redux';

import QuizPagination from '../components/QuizPaginationComponent';

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
)(QuizPagination);

export default QuizContainer;
