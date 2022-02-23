import React from 'react';
import Statistic from '../Statistic/Statistic';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import { useState } from 'react';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeStats = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => [event.target.name] + 1);
        break;
      case 'neutral':
        setNeutral(prevState => [event.target.name] + 1);
        break;
      case 'bad':
        setBad(prevState => [event.target.name] + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : '0';

  const render = () => {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleChangeStats} />
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Section>
    );
  };
}
