import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stat">
          <span className="label">Followers</span>
          <span className="number">{stats.followers}</span>
        </li>
        <li className="stat">
          <span className="label">Views</span>
          <span className="number">{stats.views}</span>
        </li>
        <li className="stat">
          <span className="label">Likes</span>
          <span className="number">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
