import * as Types from './types';
import courseApi from '../api/mockCourseApi';

export const createCourse = (course) => {
  return { type: Types.CREATE_COURSE, course }
}

const loadCoursesSuccess = (courses) => {
  return { type: Types.LOAD_COURSES_SUCCESS, courses }
}

export const loadCourses = () => {
  return (dispatch) => {
    return courseApi.getAllCourses()
    .then(courses => dispatch(loadCoursesSuccess(courses)))
    .catch(err => console.log(err))
  }
}