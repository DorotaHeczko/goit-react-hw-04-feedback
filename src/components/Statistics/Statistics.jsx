import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if (total === 0) {
    return <h4>No feedback given</h4>;
  }

  return (
    <ul className={css.listItem}>
      <li className={css.listName}>Good: {good}</li>
      <li className={css.listName}>Neutral: {neutral}</li>
      <li className={css.listName}>Bad: {bad}</li>
      <li className={css.listName}>Total: {total}</li>
      <li className={css.listName}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  goodFeedback: PropTypes.number,
  neutralFeedback: PropTypes.number,
  badFeedback: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};