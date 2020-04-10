import React from "react"
import {Link} from 'react-router-dom'
import AllStudents from "./AllStudents"


const Students =(props)=>{
    let student= props.students
    return(
        <div>
            <ul>
                <Link to={{pathname:`/students/${student.id}`,state:{} }}>
                    <h2>Name:{student.firstName} {student.lastName}</h2>
                </Link>
                <img src={student.imageUrl} width ="300" height="200"/>
            </ul>
        </div>
    )
}
export default Students