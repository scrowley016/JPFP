import React from 'react'
import {connect} from "react-redux"
import Axios from 'axios'
import {fetchSingleStudent} from "../redux/students/students"

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