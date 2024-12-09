function CardList(props: {
  header: string;
  id: string;
  onClick: (id: string | null) => void;
  backgroundColor: string;
}) {
  const { header, id, backgroundColor, onClick } = props;

  return (
    <div
      onClick={() => onClick(id)}
      className="rounded-lg cursor-pointer border-gray-300 border-[1px] p-4 shadow-md text-gray-700"
      style={{ backgroundColor }}
    >
      <h3 style={{ fontFamily: "Arsenal SC" }} className="text-base">
        {header}
      </h3>
    </div>
  );
}

export default CardList;
