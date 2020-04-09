import React from 'react'
import StudentForm from './StudentForm'

export default class AddStudent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            imageUrl:"",
            gpa:0.0
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)
    }
    handleSubmit(){
        event.preventDefault()
        try{
            const updateState={
                firstName:this.state.firstname,
                lastName:this.state.lastname,
                email:this.state.email,
                imageUrl:this.state.imageUrl,
                gpa:this.state.gpa
            }

            this.props.addStudent(updateState)
           
        }
        catch(err){
            next(err)
        }
    }

    render(){
        return(
            <div>
                <StudentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
