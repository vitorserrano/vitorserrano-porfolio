interface Props {
  color: string;
}

const Container: React.FC<Props> = ({ color, children }) => {
  return (
    <div className={`w-full h-screen bg-${color}`}>
      <div
        className="
          max-w-6xl h-screen mx-auto flex flex-col justify-center items-center
          xl:flex-row xl:justify-between
        "
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
