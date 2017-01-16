import { SUBMIT_QUIZ } from "../constants/actionTypes";

const initalState = { hasBeenSubmitted: false };

const submitQuizReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case SUBMIT_QUIZ:
      return { hasBeenSubmitted: actions.hasBeenSubmitted };

    default:
      return state;
  }
};

export default submitQuizReducer;
