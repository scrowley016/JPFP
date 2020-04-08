import React from "react";
import { connect } from "react-redux";
import Campus from './Campus'
import {fetchCampuses} from "../redux/campus/campuses"
import CampusForm from "./CampusForm";
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

  addCampus(){
    this.props.addCampus(this.props.match.params.id)
  }

  removeCampus(){
    this.props.removeCampus(this.props.match.params.id)
  }

  render() {
    let allCamps= this.props.campuses
    return(
      <div>
      <div>
        {
          allCamps && allCamps.map(camp =>
            <div key={camp.id}>
              <Campus campuses={camp}/>
            </div>)
        }
      </div>

      <div>
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
    fetchCampuses: ()=> dispatch(fetchCampuses()),
    addCampus:(id)=> dispatch(addCampus(id)),
    removeCampus:(id)=>dispatch(removeCampus(id))
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
