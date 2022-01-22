import PropTypes from "prop-types";
import {
  ProfileCard,
  UserDescription,
  UserAvatar,
  AcsentText,
  UserStats,
  UserStatsItems,
} from "components/Profile/Profile.styled";

export default function Profile({
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  username,
  tag,
  location,
  stats,
}) {
  return (
    <ProfileCard>
      <UserDescription>
        <UserAvatar
          src={avatar}
          alt={username}
        />
        <AcsentText>{username}</AcsentText>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </UserDescription>

      <UserStats>
        <UserStatsItems>
          <span className="label">Followers</span>
          <AcsentText>{stats.followers}</AcsentText>
        </UserStatsItems>
        <UserStatsItems>
          <span className="label">Views</span>
          <AcsentText>{stats.views}</AcsentText>
        </UserStatsItems>
        <UserStatsItems>
          <span className="label">Likes</span>
          <AcsentText>{stats.likes}</AcsentText>
        </UserStatsItems>
      </UserStats>
    </ProfileCard>
  )
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
