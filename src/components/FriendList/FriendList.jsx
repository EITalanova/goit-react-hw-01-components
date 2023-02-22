import PropTypes from 'prop-types';

export const FriendList = ({ avatar, name, iaOnline }) => {
  return (
    <ul class="friend-list">
      <li class="item">
        <span class="status"></span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>
    </ul>
  );
};

FriendList.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
