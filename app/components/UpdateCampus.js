import React from 'react'
import CampusForm from './CampusForm'

export default class UpdateCampus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            address:""
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    handleSubmit(event){
        event.preventDefault()
        try{
            const updateState={
                id:this.props.id,
                name:this.state.name,
                address:this.state.address
            }
    
        this.props.updateCampus(updateState)
        }
        catch(err){
            console.error(err)
        }
    }
    render(){
        return(
            <div>
                <CampusForm handleChange= {this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}