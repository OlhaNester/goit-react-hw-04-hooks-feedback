//import PropTypes from 'prop-types';
import { StatisticContainer } from './Statistics.styled';

const Statistics = ( {good, neutral, bad, total, positivePercentage} ) => {
  //const { good, neutral, bad } = state;
  return (
    <StatisticContainer>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StatisticContainer>
  );
};

// Statistics.propTypes = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
//   total: PropTypes.number,
//   positivePercentage: PropTypes.number,
// };

export default Statistics;
