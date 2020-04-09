import Axios from "axios"

const SET_CAMPUSES ="SET_CAMPUSES"
const SINGLE_CAMPUS= "SINGLE_CAMPUS"
const ADD_CAMPUS ="ADD_CAMPUS"
const REMOVE_CAMPUS ="REMOVE_CAMPUS"
const UPDATE_CAMPUS ="UPDATE_CAMPUS"


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
export const setNewCampus =(campus) =>{
  return{
    type:ADD_CAMPUS,
    campus
  }
}
export const removeCamp = (campusId)=>{
  return{
    type:REMOVE_CAMPUS,
    campusId
  }
}
export const updateCampus =(campus)=>{
  return{
    type:UPDATE_CAMPUS,
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

export const postCampus=(event)=>{
  return async dispatch=>{
    try{
      const {data}= await Axios.post("/api/campuses", event)
      dispatch(setNewCampus(data))
    }
    catch(error){
      dispatch(console.error(error))
    }
  }
}

export const deleteCampus=(id)=>{
  return async dispatch =>{
    try{
      await Axios.delete(`/api/campuses/${id}`)
      dispatch(removeCamp(id))
    }
    catch(error){
      dispatch(console.error(error))
    }
  }
}

export const changeCampus=(campus)=>{
  return async dispatch=>{
    try{
      const {data} = await Axios.put(`/api/campuses/${campus.id}`, campus)
      dispatch(updateCampus(data))
    }
    catch(error){
      dispatch(console.error(error))
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
    case REMOVE_CAMPUS:
      return{...state, campuses:[...state.campuses].filter(camp=>camp.id!== action.campusId)}
    case UPDATE_CAMPUS:
      return{...state, campuses:action.campuses}
    default:
      return state
  }  
}
