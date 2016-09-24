import * as actionTypes from "./actionTypes";
import * as model from './model';

export function actionGetScore(classId) {
  return dispatch => {
    return model.getScore(classId).then(response => {
      let score = response.data;
      dispatch(
        {
          type: actionTypes.GET_SCORE,
          score: {
            score
          }
        }
      );
    });

  };
}
