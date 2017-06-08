import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {

  static propTypes = {
    courses: React.PropTypes.array.isRequired,
  }

  render () {
    return <CourseList courses={this.props.courses} />
  }
}

export default connect(state => ({ 
  courses: state.courses 
}), courseActions)(CoursesPage);