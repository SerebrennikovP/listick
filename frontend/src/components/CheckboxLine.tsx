import { useState } from "react";
import Checkbox from "./Checkbox";

const CheckboxLine = ({
  text,
  checked,
  level,
}: {
  text: string;
  checked: boolean;
  level: number;
}) => {
  const [checkedTest, setCheckedTest] = useState(checked);
  return (
    <div
      className={`w-full font-[Helvetica] text-gray-800 flex items-center ${
        level === 3 ? "pl-12 pt-1" : level === 2 ? "pl-8 pt-1" : "pt-2"
      }`}
    >
      <Checkbox onChange={setCheckedTest} checked={checkedTest} />
      <span className={` ${checked ? "text-gray-500" : "text-gray-800"}`}>
        {text}
      </span>
    </div>
  );
};

export default CheckboxLine;
