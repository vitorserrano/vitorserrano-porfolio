interface ListProps {
  elements: React.ReactNode[];
}

const List: React.FC<ListProps> = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </>
  );
};

export default List;
