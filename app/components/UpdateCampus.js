import React from 'react'
import CampusForm from './CampusForm'

export default class UpdateCampus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            address:"",
            description:"",
            imageUrl:""
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
                name:this.state.name,
                address:this.state.address,
                description:this.state.description,
                imageUrl:this.state.imageUrl
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