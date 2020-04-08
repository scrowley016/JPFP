import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import AllCampuses from "./AllCampuses"
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus"
import SingleStudents from "./SingleStudent"
import Axios from "axios";
import NavBar from "./NavBar";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
        <NavBar/>
        </nav>
        <main>
          <h1>Welcome to the Dunder Mifflin Academy of JavaScript!</h1>
          <Route exact path="/campuses" component ={AllCampuses}/>
          <Route exact path="/students" component ={AllStudents}/>
          <Route path= "/campuses/:id" component ={SingleCampus}/>
          <Route path= "/students/:id" component ={SingleStudents}/>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
