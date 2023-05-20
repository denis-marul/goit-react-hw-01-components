import PropTypes from 'prop-types';
import { Friend } from './Friend';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map(friend => (
            <Friend
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name = {friend.name}
    />
        ))}
    </ul>
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    })),    
}