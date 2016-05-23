import { quizName, quizDATA } from '../quizJSON';

const getQuizName = () => {
	return quizName;
};

const getQuizData = () => {
	return quizDATA;
};

export default { getQuizName, getQuizData };
