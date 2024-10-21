import { useState } from "react";

const Statistics = ({ good, neutral, bad, average, all }) => {
  return (
    <>
      <div>statistics</div>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average / all}</p>
        <p>positive {(good / all) * 100} %</p>
      </div>
    </>
  );
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
        <button onClick={handleGoodBtn}>good</button>
        <button onClick={handleNeutralBtn}>neutral</button>
        <button onClick={handleBadBtn}>bad</button>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        all={all}
      />
    </>
  );
};

export default App;
