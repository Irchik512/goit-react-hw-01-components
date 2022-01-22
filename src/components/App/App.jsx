import { Container } from './App.styled';
import Profile from 'components/Profile/Profile'
import FriendList from 'components/FriendList/FriendList';
import Statistics from 'components/Statistics/Statistics'
import StatisticsList from 'components/Statistics/StatisticsList'
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import data from 'data/user.json'
import friendsData from 'data/friend-list.json'
import statisticsData from 'data/dataStatistics.json';
import transactions from 'data/transactions.json';

export default function App() {
  return (
  <Container>
    <Profile
      avatar = {data.avatar}
      username = {data.username}
      tag = {data.tag}
      location = {data.location}
      stats = {data.stats}
      />
    <FriendList 
    friends = {friendsData}
    />
    <Statistics title = "Upload stats" >
      <StatisticsList stats={statisticsData}/>
    </Statistics>
    <TransactionHistory items = {transactions} />
  </Container>
  )
}; 