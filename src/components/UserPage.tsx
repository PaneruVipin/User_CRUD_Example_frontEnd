import { uniqueId } from "lodash";
import { FC, memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { usersFetchAction } from "../actions/users";
import Loader from "../loader/Loader";
import { user } from "../modeles/users";
import { usersLoadingSelector, usersSelector } from "../selectors/users";
import { State } from "../store";
import SelectedUserCard from "./SelectedUserCard";
import UserCard from "./UserCard";


type UserPageProps = {
    users:user[]
    fetchUsers:()=>void
    usersLoading:boolean
};

const UserPage: FC<UserPageProps> = ({users,fetchUsers,usersLoading,...props}) => {
 useEffect(()=>{
   fetchUsers()
 },[])
 const [selectedUser, setSelectedUser]=useState<any>(null)
 const handleUserClick=(user:user)=>{
    setSelectedUser(user)
 }
  return<div className=" bg-gray-300 min-h-screen">
{  
    usersLoading
    ?<Loader/>
     :<div className="flex flex-col items-center gap-y-10 px-6 ">
    <div className="sticky top-0 inset-x-0 z-10">
      <SelectedUserCard user={selectedUser as user}/>
     </div>
    <div className="z-0 flex flex-wrap gap-x-4 gap-y-4 justify-between max-w-4xl pl-6 md:pl-0"> 
   {
    users.map((u)=><UserCard userClick={handleUserClick} key={uniqueId()} user={u}/>)
   }
   <span className="w-72"></span>
   <span className="w-72"></span>
    </div>
  </div>}
  </div>
};

UserPage.defaultProps = {};
const mapStateToProps=(s:State)=>{
   return {
    users:usersSelector(s),
    usersLoading:usersLoadingSelector(s)
   }
}
const mapDispatchToProps={
fetchUsers:usersFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserPage));

/**
 * echo "# user-inspect" >> README.md
git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/PaneruVipin/user-inspect.git
git push -u origin main
 */