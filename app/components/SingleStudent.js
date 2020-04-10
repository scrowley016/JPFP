import React from 'react'
import {connect} from "react-redux"
import Axios from 'axios'
import {fetchSingleStudent} from "../redux/students/students"
import {Link} from 'react-router-dom'

class SingleStudent extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchSingleStudent(this.props.match.params.id)
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
                        <UpdateStudent updateStudent ={this.updateCampus} id= {stu.id}/>
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
        fetchSingleStudent: (id)=> dispatch(fetchSingleStudent(id))
    }
}

export default connect(mapState, mapDispatch)(SingleStudent)