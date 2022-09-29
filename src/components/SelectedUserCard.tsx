import { FC, memo } from "react";
import { user } from "../modeles/users";
import {FaRegHandPointDown} from 'react-icons/fa'
type UserCardProps = {
    user:user,
};

const UserCard: FC<UserCardProps> = ({user}) => {
  return <div className="md:h-60 rounded-md gap-x-20  shadow-md bg-white flex justify-between items-center px-20 ">
           <img className="w-44 h-44 rounded-full shadow-md object-cover" src={(user?.picture?.medium)
           ?(user?.picture?.medium)
            :'https://www.clipartmax.com/png/middle/364-3643767_about-brent-kovacs-user-profile-placeholder.png'}></img>
          {user?<div>
            <h2 className="text-red-300 underline text-4xl font-bold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
            <p>{`${user.location.street.number} ${user.location.street.name}
             ${user.location.postcode}`}</p>
            <p>{`${user.location.city} ${user.location.state} ${user.location.country}`}</p>
            <p>{user.gender}</p>
           </div>:
           <div className="space-y-20 ">
           <p  className="text-red-300 text-xl ">Click on the cards below to see user related data here</p>
           <FaRegHandPointDown className=" w-20 h-20 text-yellow-500 animate-bounce"/>
           </div>
           }
      </div>
};

UserCard.defaultProps = {};

export default memo(UserCard);