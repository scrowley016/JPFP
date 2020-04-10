import React from 'react'
import {Link} from 'react-router-dom'

const NavBar =(props =>{
    return(
        <div>
            <div>
                <ul>
                <div><Link to="/">HOME</Link></div>
                <div><Link to="/campuses">ALL CAMPUSES</Link></div>
                <div><Link to="/students">ALL STUDENTS</Link></div>
                </ul>
            </div>
        </div>
    )
})

export default NavBar