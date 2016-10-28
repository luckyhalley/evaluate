import {actionGetCourseInfo, actionGetScore, actionUpdateScore} from './action';
import {bindActionCreators} from 'redux';

export function mapState (state) {
  let { evaluate } = state;
  return {
    evaluate,
    header_param: {
      evaluate: {
        goBack: () => {
          window.history.back();
        },
        title: '评价'

      },
      show_evaluate: {
        goBack: () => {
          window.history.back();
        },
        title: '查看评价'
      }
    },
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
