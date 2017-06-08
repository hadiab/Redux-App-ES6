import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class ManageCourse extends Component {
  
  constructor (props) {
    super(props)
    
    this.state = {
      course: { title: "" }
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course })
  }

  onSave(){
    this.props.createCourse(this.state.course);
  }

  render () {
    return (
      <div>
        <h2>Add New Course</h2>
        <hr/>
        <div className="form-group">
          <input type="text" onChange={this.onTitleChange} className="form-control"/>
        </div>
        <input className="btn btn-primary" onClick={this.onSave} type="submit" value="Save" />
      </div>
    )
  }
}

export default connect(null, courseActions)(ManageCourse);