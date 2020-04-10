import React from 'react'
import {connect} from "react-redux"
import {fetchSingleStudent, changeStudent} from "../redux/students/students"
import {Link} from 'react-router-dom'
import UpdateStudent from './UpdateStudent'

class SingleStudent extends React.Component{
    constructor(props){
        super(props)
        this.updateStudent=this.updateStudent.bind(this)
    }
    componentDidMount(){
        this.props.fetchSingleStudent(this.props.match.params.id)
    }
    updateStudent(student){
        this.props.changeStudent(student)
      } 

    render(){
        const stu = this.props.students
        return(
            <div>
                <img src= {stu.imageUrl} width="350" height= "350"/>
                <h2> Name:{stu.firstName} {stu.lastName}</h2>
                <h3>Email: {stu.email}</h3>
                <h3>GPA:{stu.gpa}</h3>
                <Link to = {`/campuses/${stu.campusId}`}>
                        <h3>Campus Name:{stu.campusId}</h3>
                </Link>

                <div>
                        <h2>Update Student Below:</h2>
                        <UpdateStudent updateStudent ={this.updateStudent} id={stu.id}/>
                </div>
            </div>
        )
    }
}
const mapState =(state) =>{
    return{
        students: state.students.singleStudent
    }
}
const mapDispatch=(dispatch)=>{
    return{
        fetchSingleStudent:(id)=> dispatch(fetchSingleStudent(id)),
        changeStudent:(id)=>dispatch(changeStudent(id))
    }
}

export default connect(mapState, mapDispatch)(SingleStudent)