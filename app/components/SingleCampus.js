import React from 'react'
import {connect} from "react-redux"
import Axios from 'axios'
import {fetchSingleCampus,changeCampus} from "../redux/campus/campuses"
import UpdateCampus from './UpdateCampus'
``

class SingleCampus extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
        this.props.fetchSingleCampus(this.props.match.params.id)
    }
    updateCampus(){
        console.log(this.props)
        this.props.changeCampus(this.props.match.params.id)
      } 


    render(){
        const campus= this.props.campuses
        return(
            <div>
                <img src={campus.imageUrl} width="350" height="300"/>
                <h2>Name:{campus.name}</h2>
                <h3> Address: {campus.address} </h3>
                <h3> About this Campus: {campus.description}</h3>

                <h2>Update Campus Below:</h2>
                <UpdateCampus updateCampus={this.updateCampus}/>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
      campuses: state.campuses.singleCampus
    };
  };

const mapDispatch=(dispatch)=> ({
    fetchSingleCampus: (id)=> dispatch(fetchSingleCampus(id)),
    changeCampus:(id)=> dispatch(changeCampus(id))

})

export default connect(mapState, mapDispatch)(SingleCampus)