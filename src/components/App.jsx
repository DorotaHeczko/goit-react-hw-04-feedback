import React, { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;

  const feedbackKeys = Object.keys(feedback);
  const totalFeedback = Object.values(feedback).reduce(
    (total, count) => total + count,
    0
  );
  const positivePercentage = Math.round((good / totalFeedback) * 100) || 0;

  const handleFeedback = (e) => {
    const {
      target: { name },
    } = e;

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  return (
    <>
      <Section title={"Please leave Feedback"}>
        <FeedbackOptions
          options={feedbackKeys}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title={"Statistics"}>
        {totalFeedback === 0 ? (
          <h4>No feedback given</h4>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
