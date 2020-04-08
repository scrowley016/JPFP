import React from 'react'
import Campus from './Campus'
import CampusForm from './CampusForm'
import Axios from 'axios'

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
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)
        console.log(this.props)
    }

    async handleSubmit(event){
        event.preventDefault()
        try{
            const res = await Axios.post('api/campuses', this.state)
            this.props.addCampus(res.data)
        }
        catch(err){
            next(err)
        }

    }


    render(){
        return(
            <div>
                <CampusForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
    
}