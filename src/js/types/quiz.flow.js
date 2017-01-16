// @flow
export type TypeQuestionId = string;
export type TypeChoiceId = string;

export type TypeChoice = {
  title: string,
  id: TypeChoiceId,
  questionId: TypeQuestionId
};

export type TypeQuestion = {
  title: string,
  id: TypeQuestionId,
  choices: TypeChoice[]
};
