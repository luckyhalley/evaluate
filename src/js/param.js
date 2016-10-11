import {actionGetCourseInfo, actionGetScore, actionUpdateScore} from './action';
import {bindActionCreators} from 'redux';

export function mapState (state) {
  let { evaluate } = state;
  return {
    evaluate,
    evaluate_param: {
      harvest: "学习收获：",
      interaction: "互动氛围：",
      behave: "老师表现：",
      boardLayout: "黑板内容："
    }
  };
}
export function mapDispatch (dispatch) {
  return bindActionCreators({
    actionGetCourseInfo,
    actionGetScore,
    actionUpdateScore
  }, dispatch);
}
