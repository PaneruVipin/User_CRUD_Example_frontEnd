import { Reducer } from "redux";
import { USERS_FETCH, USERS_FETCHED} from "../actions/users";
import { user } from "../modeles/users";
type state={
   entities:user[] | []
   usersLoading:boolean
}
const initialState:state={
  entities:[],
  usersLoading:false
}
export const usersReducers:Reducer<state>=(state=initialState,action)=>{
   switch (action.type) {
     case USERS_FETCH:{
        return {...state, usersLoading:true}
     }
     case USERS_FETCHED:{
      const users=action.payload
        return {...state, entities:users, usersLoading:false}
     }
    default:{
        return {...state}
    }
       
   }
}