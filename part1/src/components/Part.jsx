const Part = ({ part, id }) => {
  return (
    <>
      <p key={id}>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

export default Part;
