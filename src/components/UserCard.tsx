import { FC, memo } from "react";
import { user } from "../modeles/users";

type UserCardProps = {
    user:user
    userClick:(user:user)=>void
};

const UserCard: FC<UserCardProps> = ({user,userClick}) => {
    const {name,email,nat,gender}=user
    const handleClick=()=>{
        userClick(user)
    }
  return <div 
            onClick={handleClick}
            className="bg-white p-2 space-y-1 w-72 hover:bg-indigo-300 ">
           <p className="text-gray-400">{`${gender} ${nat}`}</p>
           <h3 className="text-black font-bold text-xl ">{`${name.title} ${name.first} ${name.last}`}</h3>
           <p className="text-red-300">{email}</p>
        </div>;
};

UserCard.defaultProps = {};

export default memo(UserCard);