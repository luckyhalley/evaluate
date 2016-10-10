import * as actionTypes from './actionTypes';
import objectAssign from 'object-assign';
import { combineReducers } from 'redux';

let initState = {
  course: {},
  score: {}
};
function evaluate (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_COURSE_INFO:
      return objectAssign({}, state, action.course);
    case actionTypes.GET_SCORE:
      return objectAssign({}, state, action.score);
    case actionTypes.UPDATE_SCORE:
      return objectAssign({}, state, action.score);
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  evaluate
});

export default rootReducer;
