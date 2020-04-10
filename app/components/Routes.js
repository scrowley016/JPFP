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
          <h1>WELCOME TO THE DUNDER MIFFLIN ACADEMY OF JAVASCRIPT!</h1>
          <img src="https://lh3.googleusercontent.com/proxy/QRGflYVzeCOOB86oIddAmbyOLtIVMH2JdBc8c15ejLqZuZJZvXk_5kacPT9-o0Y8adlP-YHuRiDtnMVO5UUvjjsX0E66IDV5rJmWD6HhXA5BLSBc_Jrnn4PGWYBcpyqOsLSX4lbVwQVPMwbHww" height="200" width="350"/>
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
