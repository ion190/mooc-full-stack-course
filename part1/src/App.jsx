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
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </>
    );
  };

  const Total = (props) => {
    return <p>Total exercise is {props.totalExercises}</p>;
  };

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        totalExercises={
          parts[0]["exercises"] + parts[1]["exercises"] + parts[2]["exercises"]
        }
      />
    </>
  );
};

export default App;
