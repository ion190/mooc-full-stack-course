import Part from "./Part";

const Content = ({ parts }) => {
  const totalEx = parts.reduce((s, p) => s + Number(p.exercises), 0);

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
