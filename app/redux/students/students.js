import Axios from "axios"

const SET_STUDENTS ="SET_STUDENTS"
const SINGLE_STUDENT ="SINGLE_STUDENT"
const ADD_STUDENT="ADD_STUDENT"
const REMOVE_STUDENT= "REMOVE_STUDENT"

export const setStudents = (students) => {
  return{
    type:SET_STUDENTS,
    students
  }
};
export const setSingleStudent =(student)=>{
  return{
    type: SINGLE_STUDENT,
    student
  }
}
export const setNewStudent =(student)=>{
  return{
    type:ADD_STUDENT,
    student
  }
}
export const removeStu =(studentId)=>{
  return{
    type:REMOVE_STUDENT,
    studentId
  }
}



export const fetchStudents = () => {
  return async dispatch => {
    try{
      const {data} = await Axios.get("api/students")
      dispatch(setStudents(data))
    }
    catch(error){
      dispatch(console.error(error))
    }
  }
};

export const fetchSingleStudent=(id)=>{
  return async dispatch =>{
    try{
      const {data} = await Axios.get(`/api/students/${id}`)
      dispatch(setSingleStudent(data))
    }
    catch(error){
      dispatch(console.error(error))
    }
  }
}

export const postStudent=(id)=>{
  return async dispatch =>{
    try{
      const {data} = await Axios.post("api/students", id)
      dispatch(setNewStudent(data))
    }
    catch(err){
      dispatch(console.error(error))
    }
  }
}

export const deleteStudent=(id)=>{
  return async dispatch =>{
    try{
      await Axios.delete(`/api/students/${id}`)
      dispatch(removeStu(id))
    }
    catch(err){
      dispatch(console.error(error))
    }
  }
}




const initialState={
  students:[],
  singleStudent:{}
}

export default function studentsReducer(state= initialState,action) {
  switch(action.type){
    case SET_STUDENTS:
      return{...state, students: action.students}
    case SINGLE_STUDENT:
      return{...state, singleStudent:action.student}
    case ADD_STUDENT:
      return{...state, students:[...state.students,action.students]}
    case REMOVE_STUDENT:
      return{...state, students:[...state.students].filter(stu=>stu.id!==action.studentId)}
    default:
      return state
  } 
}
