import React from "react";
import { connect } from "react-redux";
import Campus from './Campus'
import {fetchCampuses} from "../redux/campus/campuses"

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  constructor(){
    super()

  }
  componentDidMount(){
    this.props.fetchCampuses()

  }

  render() {
    let allCamps= this.props.campuses
    return(
      <div>
        {
          allCamps && allCamps.map(camp =>
            <div key={camp.id}>
              <Campus campuses={camp}/>
            </div>)
        }
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
    fetchCampuses: ()=> dispatch(fetchCampuses())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
