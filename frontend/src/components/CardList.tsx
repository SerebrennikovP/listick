import { ListDataType } from "../context/ListContext";
import List from "./main/List";

function CardList(props: {
  id: string;
  onClick: (id: string | null) => void;
  backgroundColor: string;
  listData: ListDataType;
}) {
  const { id, backgroundColor, onClick, listData } = props;

  return (
    <div
      onClick={() => onClick(id)}
      className="rounded-lg relative cursor-pointer border-gray-300 border-[1px] pt-2 px-4 shadow-md text-gray-700 pb-0 aspect-square overflow-clip max-h-[fit-content]"
      style={{ backgroundColor }}
    >
      <div className="overflow-clip">
        <List minimize data={listData} />
        <div
          style={{
            backgroundColor,
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%)",
          }}
          className="absolute z-10 bottom-0 left-0 h-14 w-full"
        ></div>
      </div>
    </div>
  );
}

export default CardList;
