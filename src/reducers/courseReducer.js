import * as Types from '../actions/types';

export default (state = [], action) => {
  switch(action.type){
    case Types.CREATE_COURSE:
      return [ ...state, action.course ];

    case Types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}