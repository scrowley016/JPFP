import React from 'react'
import {connect} from "react-redux"
import Axios from 'axios'
import {fetchSingleCampus} from "../redux/campus/campuses"


class SingleCampus extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchSingleCampus(this.props.match.params.id)
    }
    render(){
        const campus= this.props.campuses
        return(
            <div>
                <img src={campus.imageUrl} width="350" height="300"/>
                <h2>Name:{campus.name}</h2>
                <h3> Address: {campus.address} </h3>
                <h3> About this Campus: {campus.description}</h3>
                {/* <li>{
                this.props && this.props.students.map(stu=>{
                    if(stu.campusId=== campus.id){
                        return(<div>
                            <h3>{stu.firstName} {stu.lastName}</h3>
                            </div>)
                    }
                })
                }</li> */}
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
    fetchSingleCampus: (id)=> dispatch(fetchSingleCampus(id))
})

export default connect(mapState, mapDispatch)(SingleCampus)