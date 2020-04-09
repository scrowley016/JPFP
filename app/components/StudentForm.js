import React from 'react'

const StudentForm =(props) => (
   <form id='add-student' onSubmit={props.handleSubmit}>
    <div>
    <div>
        <label htmlFor = 'firstName' >
            First Name:
        </label>
        <input name='firstName' type='string' onChange={props.handleChange} value={props.firstName} />
    </div>

    <div>
        <label htmlFor = 'lastName'>
            Last Name:
        </label>
        <input name='lastName' type='string' onChange={props.handleChange} value={props.lastName} />
    </div>

    <div>
        <label htmlFor = 'email'>
            Email:
        </label>
        <input name='email' type='string' onChange={props.handleChange} value={props.email} />
    </div>
</div>

<button type='submit'>SUBMIT</button>
</form>
)
export default StudentForm