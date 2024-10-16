const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

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
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
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
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
      />
      <Total
        totalExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </>
  );
};

export default App;
