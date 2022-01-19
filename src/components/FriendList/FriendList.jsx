import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
import {ListOfFriends} from "./FriendList.styled";

export default function FriendList({friends}) {
  return (
   <ListOfFriends>
    {
      friends.map((friend) => { 
        return(
          <FriendListItem 
          key = {friend.id}
          avatar = {friend.avatar}
          name = {friend.name}
          isOnline = {friend.isOnline}
          />
        )
      })
    }
  </ListOfFriends>
  )
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};