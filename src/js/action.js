import * as actionTypes from "./actionTypes";
import * as model from './model';

export function actionGetCourseInfo (eventId) {
  return dispatch => {
    return model.getCourseInfo(eventId).then(response => {
      let course = response;
      dispatch(
        {
          type: actionTypes.GET_COURSE_INFO,
          course: {
            course
          }
        }
      );
    });
  };
}

export function actionGetScore (classId) {
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

export function actionUpdateScore (score) {
  return dispatch => {
    dispatch(
      {
        type: actionTypes.UPDATE_SCORE,
        score: {
          score
        }
      }
    );
  };
}
