// @flow
import { connect } from 'react-redux';

import QuizActions from '../components/QuizActions';

import { selectChoice } from '../quizActions';

import type { TypeStore } from '../../types/TypeStore.flow';

const mapStateToProps = (state: TypeStore) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectChoice: () => dispatch(selectChoice),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizActions);
