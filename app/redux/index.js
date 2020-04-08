import { combineReducers } from 'redux'
import campusesReducer from './campus/campuses'
import studentsReducer from './students/students'

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer
})

export default appReducer
