import Profile from '../Profile/Profile'
import data from 'user.json'
import FriendList from '../FriendList/FriendList';
import friendsData from 'friend-list.json'
import Statistics from '../Statistics/Statistics'
import StatisticsList from '../Statistics/StatisticsList'
import statisticsData from 'dataStatistics.json';
import transactions from 'transactions.json';
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import { Container } from './App.styled';

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
      <StatisticsList stats={statisticsData} />
    </Statistics>
    <TransactionHistory items = {transactions} />
  </Container>
  )
}; 