import {actionGetCourseInfo, actionGetScore} from './action';
import {bindActionCreators} from 'redux';

export function mapState(state) {
  let { evaluate } = state;
  return {
    evaluate
  };
}
export function mapDispatch(dispatch) {
  return bindActionCreators({
    actionGetCourseInfo,
    actionGetScore
  }, dispatch);
}