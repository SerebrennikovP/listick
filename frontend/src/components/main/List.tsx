import { ListDataType } from "../../context/ListContext";
import CheckboxLine from "../CheckboxLine";

function List(props: { data: ListDataType; minimize?: boolean }) {
  const { data, minimize = false } = props;

  return (
    <div
      className={`
        ${minimize && "min-w-max transform scale-50 origin-top-left"}
      `}
    >
      <div
        style={{ fontFamily: "Arsenal SC" }}
        className={`
            ${
              minimize ? "text-4xl pb-3" : "text-xl leading-loose font-semibold"
            }
            `}
      >
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
