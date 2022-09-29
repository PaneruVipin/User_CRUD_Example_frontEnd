
import { State } from "../store";

export const usersSelector=(s:State)=>s.users.entities
export const usersLoadingSelector=(s:State)=>s.users.usersLoading