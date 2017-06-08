import React, { Component } from 'react';
import CourseItem from './CourseItem';

class CourseList extends Component {

  static propTypes = {
    courses: React.PropTypes.array.isRequired,
  }

  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.courses.map(course => {
              return <CourseItem key={course.id} course={course} />
            })
          }
        </tbody>
      </table>  
    )
  }
}

export default CourseList