import { AcsentText } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types'
import { Friends, Status,Avatar } from './FriendListItem.styled';
export default function  FriendListItem ({avatar,name,isOnline}) {
  return (
    <Friends>
      <Status status = {isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="100" />
      <AcsentText>{name}</AcsentText>
    </Friends> 
  )
}

 FriendListItem.propTypes  = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};