import PropTypes from 'prop-types'
 import { StatsList, StatsItem, Text } from './StatisticsList.styled';
 ;
 
export default function StatisticsList({stats}) {
  return (
  <StatsList >
    {
      stats.map((stat) => {
        return(
          <StatsItem key = {stat.id}>
          <span>{stat.label}</span>
          <Text>{stat.percentage}%</Text>
          </StatsItem>
        )
      })
    }
  </StatsList>
  )
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  })),  
};
