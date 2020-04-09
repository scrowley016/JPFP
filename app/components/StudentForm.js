import React from 'react'

const StudentForm =(props) => (
   <form id='add-student' onSubmit={props.handleSubmit}>
    <div>
    <div>
        <label htmlFor = 'firstname' >
            First Name:
        </label>
        <input firstname='firstname' type='string' onChange={props.handleChange} value={props.firstName} />
    </div>

    <div>
        <label htmlFor = 'lastname'>
            Last Name:
        </label>
        <input lastname='lastname' type='string' onChange={props.handleChange} value={props.lastName} />
    </div>

    <div>
        <label htmlFor = 'email'>
            Email:
        </label>
        <input email='email' type='string' onChange={props.handleChange} value={props.email} />
    </div>
</div>

<button type='submit'>SUBMIT</button>
</form>
)
export default StudentForm