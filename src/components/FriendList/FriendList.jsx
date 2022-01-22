import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {ListOfFriends} from 'components/FriendList/FriendList.styled';

export default function FriendList({friends}) {
  return (
   <ListOfFriends>
    {
      friends.map(({id, avatar, name, isOnline}) => { 
        return(
          <FriendListItem 
          key = {id}
          avatar = {avatar}
          name = {name}
          isOnline = {isOnline}
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