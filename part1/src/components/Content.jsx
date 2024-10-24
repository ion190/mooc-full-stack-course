import Part from "./Part";

const Content = ({ parts }) => {
  let totalEx = 0;
  for (let i = 0; i < parts.length; i++) {
    totalEx += Number(parts[i].exercises);
  }

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>total of {totalEx} exercises</p>
    </>
  );
};

export default Content;
