import axios from "axios"
import { user } from "../modeles/users"

const USERS_BASE_API ='https://randomuser.me/api/'

export const getUsers= async(page:number=1)=>{
 const response= await axios.get<{results:user[]}>(USERS_BASE_API
    +`?inc=gender,name,nat,location,picture,email&results=%2020`)
 return response.data.results
}
