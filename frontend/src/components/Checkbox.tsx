import React from "react";
import { useListContext } from "../context/ListContext";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const { backgroundColor } = useListContext();

  return (
    <label className="mr-2 w-5 h-5 relative inline-block cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="absolute opacity-0"
      />
      <span
        className={` relative inline-block w-full h-full border-[1px] border-gray-400 rounded-sm transition-colors duration-300 ${
          checked ? "bg-gray-400" : "bg-transparent"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            style={{fill:backgroundColor}}
            viewBox="0 0 24 24"
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300`}
          >
            <path d="M9 16.2l-4.2-4.2 1.4-1.4L9 13.4l7.8-7.8 1.4 1.4z" />
          </svg>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
