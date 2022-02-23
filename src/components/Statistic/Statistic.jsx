import PropTypes from 'prop-types';
import s from './Statistic.module.css';
export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={s.stat}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positiv feedback: {positivePercentage} %</li>
      </ul>
    </>
  );
}

// Statistic.propTypes = {
//   good: PropTypes.string,
//   neutral: PropTypes.string,
//   bad: PropTypes.string,
//   total: PropTypes.string,
//   positivePercentage: PropTypes.string,
// };
