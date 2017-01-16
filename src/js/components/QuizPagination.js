// @flow
import React from "react";

type QuizPaginationPropTypes = {
  nextQuestion: Function,
  previousQuestion: Function
};

const QuizPagination = (
  { previousQuestion, nextQuestion }: QuizPaginationPropTypes
) => (
  <div>
    <label htmlFor="previous-button">
      PREVIOUS
      <input
        id="previous-button"
        type="button"
        onClick={previousQuestion}
        className="pagination-previous-button"
        placeholder="PREVIOUS"
      />
    </label>
    <label htmlFor="next-button">
      NEXT
      <input
        id="next-button"
        type="button"
        onClick={nextQuestion}
        className="pagination-next-button"
        placeholder="NEXT"
      />
    </label>
  </div>
);

export default QuizPagination;
