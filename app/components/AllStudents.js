import React from "react";
import { connect } from "react-redux";
import {fetchStudents, postStudent, deleteStudent} from "../redux/students/students"
import Students from './Student'
import AddStudent from './AddStudent'

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  constructor(){
    super()
    this.addStudent=this.addStudent.bind(this)
    this.removeStudent=this.removeStudent.bind(this)
  }

  componentDidMount(){
    this.props.fetchStudents()
  }

  addStudent(event){
    this.props.postStudent(event)
  }

  removeStudent(id){
    this.props.deleteStudent(id)
  }

  render() {
    let students =this.props.students
    return(
      <div>
      <div>
        {
          students && students.map(stu =>
            <div key={stu.id}>
                <Students students={stu}/>
                <button onClick={()=>this.removeStudent(stu.id)}>X</button>
              </div>)
        }
      </div>
      <div>
        <h2>Add a Student Below:</h2>
        <AddStudent addStudent={this.addStudent}/>
      </div>
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
    fetchStudents:()=>dispatch(fetchStudents()),
    postStudent:(id)=> dispatch(postStudent(id)),
    deleteStudent:(id)=> dispatch(deleteStudent(id))
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
