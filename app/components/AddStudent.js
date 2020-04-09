import React from 'react'
import StudentForm from './StudentForm'

export default class AddStudent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            email:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)
    }

    handleSubmit(event){
        event.preventDefault()
        try{
            const updateState={
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
            }
            this.props.addStudent(updateState)
           
        }
        catch(err){
            console.error(err)
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
