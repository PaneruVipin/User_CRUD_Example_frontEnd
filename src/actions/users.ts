import { user } from "../modeles/users"
export const USERS_FETCH='USERS_FETCH'
export const USERS_FETCHED='USERS_FETCHED'


export const usersFetchAction=()=>{
    return {type:USERS_FETCH}
}
export const usersFetchedAction=(users:user[])=>{
    return {type:USERS_FETCHED, payload:users}
}