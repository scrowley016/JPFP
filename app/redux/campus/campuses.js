import Axios from "axios"

const SET_CAMPUSES ="SET_CAMPUSES"
const SINGLE_CAMPUS= "SINGLE_CAMPUS"
const ADD_CAMPUS ="ADD_CAMPUS"



export const setCampuses = (campuses) => {
  return{
    type: SET_CAMPUSES,
    campuses
  }
};

export const setSingleCampus =(campus)=>{
  return{
    type:SINGLE_CAMPUS,
    campus
  }
}
export const addCampus =(campus) =>{
  return{
    type:ADD_CAMPUS,
    campus
  }
}




export const fetchCampuses = () => {
  return async dispatch => {
    try{
      const {data} = await Axios.get("/api/campuses")
      dispatch(setCampuses(data))

    }catch(error){
      dispatch(console.error(error))
    }
  }
};

export const fetchSingleCampus=(id)=>{
  return async dispatch =>{
    try{
    const {data} = await Axios.get(`/api/campuses/${id}`)
    dispatch(setSingleCampus(data))
    }
    catch(error){
      dispatch(console.error(error))
    }
  }
}

export const postCampus=()=>{
  return async dispatch=>{
    try{
      const {data}= await Axios.post("/api/campuses")
      dispatch(addCampus(data))
    }
    catch(err){
      next(err)
    }
  }
}

const initialState={
  campuses:[],
  singleCampus:{}
}

export default function campusesReducer(state= initialState,action) {
  switch(action.type){
    case SET_CAMPUSES:
      return{...state, campuses:action.campuses}
    case SINGLE_CAMPUS:
      return{...state, singleCampus:action.campus}
    case ADD_CAMPUS:
      return{...state, campuses:[...state.campuses,action.campus]}
    default:
      return state
  }  
}
