import React from "react";
import { connect } from "react-redux";
import Campus from './Campus'
import {fetchCampuses, postCampus, deleteCampus} from "../redux/campus/campuses"

import  AddCampus  from "./AddCampus";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  constructor(){
    super()
    this.addCampus=this.addCampus.bind(this)
    this.removeCampus=this.removeCampus.bind(this)
  }

  componentDidMount(){
    this.props.fetchCampuses()
  }

  addCampus(event){
    this.props.postCampus(event)
  }

  removeCampus(id){
    this.props.deleteCampus(id)
  }

  render() {
    let allCamps= this.props.campuses
    console.log(this.props)
    return(
      <div>
      <div>
        {
          allCamps && allCamps.map(camp =>
            <div key={camp.id}>
              <Campus campuses={camp}/>
              <button onClick={()=>this.removeCampus(camp.id)}>X</button>
            </div>)
        }
      </div>

      <div>
        <h2> Add A Campus Below:</h2>
        <AddCampus addCampus={this.addCampus}/>
      </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    campuses:state.campuses.campuses
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampuses:()=> dispatch(fetchCampuses()),
    postCampus:(id)=> dispatch(postCampus(id)),
    deleteCampus:(id)=>dispatch(deleteCampus(id))
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
