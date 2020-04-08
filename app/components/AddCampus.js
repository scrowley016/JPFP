import React from 'react'

export class AddCampus extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            address:"",
            description:"",
            imageUrl:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({name:event.target.name})
    }
    render(){
        return(
            <div>

            </div>
        )
    }
    
}