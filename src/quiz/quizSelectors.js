// @flow
import type { TypeStore } from '../types/TypeStore.flow';

const getAllQuestions = (state: TypeStore) => {
  const questions = state.quiz.questions;
  const keys = Object.keys(questions);
  const array = [];

  keys.forEach(key => array.push(questions[key]));

  return array;
};

export { getAllQuestions };
