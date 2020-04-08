import React from "react";
import { connect } from "react-redux";
import {fetchStudents} from "../redux/students/students"
import Students from './Student'

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.fetchStudents()

  }

  render() {
    let students =this.props.students
    return(
      <div>
        {
          students && students.map (stu =>
            <div key= {stu.id}>
                <Students students={stu}/>
              </div>)
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    students:state.students.students
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudents:()=>dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
