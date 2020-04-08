import React from 'react'

const StudentForm =(props) => (
    <form id='add-campus'>
    <div>
            <label htmlFor = 'firstName'>
                First Name:
            </label>
            <input name='name' type='text' onChange={props.handleChange} value={props.firstName} />
        </div>

        <div>
            <label htmlFor = 'lastName'>
                Last Name:
            </label>
            <input name='name' type='text' onChange={props.handleChange} value={props.lastName} />
        </div>

        <div>
            <label htmlFor = 'email'>
                Email:
            </label>
            <input name='email' type='text' onChange={props.handleChange} value={props.email} />
        </div>
        <button type='submit'>SUBMIT</button>
    </form>
)

export default StudentForm
