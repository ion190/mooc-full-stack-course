import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  let [selected, setSelected] = useState(0);
  let [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const arrLength = anecdotes.length;
  let [max, setMax] = useState(0);

  const handleBtn = () => {
    let randomNum = Math.ceil(Math.random() * arrLength) - 1;
    setSelected(randomNum);
  };

  const handleVotes = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);

    let max = 0;
    for (let i = 0; i < arrLength; i++) {
      if (points[i] > max) max = i;
    }
    setMax(max);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleBtn}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
    </div>
  );
};

export default App;
