import { ListDataType } from "../../context/ListContext";
import CheckboxLine from "../CheckboxLine";

function List(props: { data: ListDataType }) {
  const { data } = props;

  return (
    <div>
      <div style={{ fontFamily: "Arsenal SC" }} className="text-xl font-semibold leading-loose" >
        {data.title}
      </div>
      {data.list.map((item, index) => {
        return (
          <CheckboxLine
            key={index}
            level={item.level}
            text={item.text}
            checked={item.checked}
          />
        );
      })}
    </div>
  );
}

export default List;
