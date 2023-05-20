import css from './App.module.css';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';



export const App = () => {
  return (<div className={css.container} >
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats} 
    />
    <Statistics
      title="Upload stats"
      stats={data}
    />
    <FriendList
      friends={friends} 
    />
    <TransactionHistory
      items={transactions}
    />
  </div>)
};
