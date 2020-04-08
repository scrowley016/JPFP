import React from 'react'
import {Link} from 'react-router-dom'

const Campus =(props)=>{
    let camp= props.campuses

    return(
        <div>
            <ul>
                {
                <div key={camp.id}>
                    <Link to ={{ pathname:`/campuses/${camp.id}`,state:{} }}>
                    <h2> Name:{camp.name} </h2>
                    </Link>
                    <img src= {camp.imageUrl} width= "250" height="200"/>
                    
                </div>
                }
            </ul>
        </div>
    )
}

export default Campus
