import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.options}>
      <button name="good" className={s.btn} onClick={onLeaveFeedback}>
        good
      </button>
      <button name="neutral" className={s.btn} onClick={onLeaveFeedback}>
        neutral
      </button>
      <button name="bad" className={s.btn} onClick={onLeaveFeedback}>
        bad
      </button>
    </div>
  );
}
