import Axios from "axios"

const SET_STUDENTS ="SET_STUDENTS"
const SINGLE_STUDENT ="SINGLE_STUDENT"
const ADD_CAMPUS="ADD_CAMPUS"

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
    default:
      return state
  } 
}
