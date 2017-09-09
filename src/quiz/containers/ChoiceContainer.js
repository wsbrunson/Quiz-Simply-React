// @flow
import { connect } from 'react-redux';

import Choice from '../components/Choice';

import { selectChoice } from '../quizActions';

import type { TypeStore } from '../../types/TypeStore.flow';
import type { TypeSelectionsMap } from '../../types/TypeQuiz.flow';

const mapStateToProps = (state: TypeStore) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectChoice: (selection: TypeSelectionsMap) =>
    dispatch(selectChoice(selection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Choice);
