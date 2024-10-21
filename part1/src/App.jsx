import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, average, all }) => {
  return (
    <>
      <div>statistics</div>
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average / all} />
        <StatisticLine text="positive" value={(good / all) * 100} />
      </div>
    </>
  );
};

const FeedbackButton = ({ handleBtn, text }) => {
  return <button onClick={handleBtn}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodBtn = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };

  const handleNeutralBtn = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadBtn = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  return (
    <>
      <div>give feedback</div>
      <div>
        <FeedbackButton handleBtn={handleGoodBtn} text="good" />
        <FeedbackButton handleBtn={handleNeutralBtn} text="neutral" />
        <FeedbackButton handleBtn={handleBadBtn} text="bad" />
      </div>

      {all > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          average={average}
          all={all}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
