// @flow
import React from 'react'

type QuizPaginationPropTypes = {
  nextQuestion: Function,
  previousQuestion: Function
}

const QuizPagination = ({ previousQuestion, nextQuestion }: QuizPaginationPropTypes) => (
  <div>
    <label>PREVIOUS
    <input
      type='button'
      onClick={previousQuestion}
      className='pagination-previous-button'
      placeholder='PREVIOUS'
    />
    </label>
    <label>NEXT
    <input
      type='button'
      onClick={nextQuestion}
      className='pagination-next-button'
      placeholder='NEXT'
    />
    </label>
  </div>
)

export default QuizPagination
