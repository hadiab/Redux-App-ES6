import React, { Component } from 'react'

class CourseItem extends Component {
  render () {
    return (
      <tr>
        <td><button className="btn btn-primary">Delete</button></td>
        <td>{ this.props.course.title }</td>
      </tr>
    )
  }
}

export default CourseItem