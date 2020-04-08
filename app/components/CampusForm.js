import React from 'react'

const CampusForm =(props) => (
    <form id='add-campus'>
    <div>
        <div>
            <label htmlFor = 'campusName'>
                Campus Name:
            </label>
            <input name='name' type='string' onChange={props.addCampus} value={props.name} />
        </div>

        <div>
            <label htmlFor = 'address'>
                Address:
            </label>
            <input name='address' type='string' onChange={props.addCampus} value={props.address} />
        </div>
        </div>

        <button type='submit' onSubmit={props.addCampus}>SUBMIT</button>
    </form>
)

export default CampusForm