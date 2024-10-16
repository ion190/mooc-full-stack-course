const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return <p>{props.course}</p>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.part} has {props.exercises} exercise
      </p>
    );
  };

  const Content = (props) => {
    return (
      <>
        <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} />
      </>
    );
  };

  const Total = (props) => {
    return <p>Total exercise is {props.totalExercises}</p>;
  };

  return (
    <>
      <Header course={course} />
      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;