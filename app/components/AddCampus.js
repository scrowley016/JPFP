import React from 'react'
import CampusForm from './CampusForm'

export default class AddCampus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            address:"",
            description:"",
            imageUrl:""
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
        console.log(this.state)
        console.log(event)
        try{
            const updateState={
                name:this.state.name,
                address:this.state.address,
                description:this.state.description,
                imageUrl:this.state.imageUrl
            }
            this.props.addCampus(updateState)
        }      
        catch(err){
            console.error(err)
        }

    }

    render(){
        return(
            <div>
                <CampusForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
    
        )
    }
    
}