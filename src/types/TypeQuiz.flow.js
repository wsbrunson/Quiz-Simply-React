// @flow
export type TypeChoice = {
  id: number,
  text: string,
  questionId: number,
};

export type TypeQuestion = {
  id: number,
  text: string,
  choices: TypeChoice[],
};

export type TypeQuestionsMap = {
  [id: string]: TypeQuestion,
};

export type TypeQuestionsArray = TypeQuestion[];

export type TypeApiQuiz = {
  name: string,
  questions: TypeQuestionsArray,
};

export type TypeAppQuiz = {
  questions: TypeQuestionsMap,
};
