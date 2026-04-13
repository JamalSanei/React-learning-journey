const List = ({ data, inputSearch }) => {
  return (
    <div>
      {data
        .filter(({ name }) => name.includes(inputSearch))
        .map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
    </div>
  );
};

export default List;
