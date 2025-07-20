import React from "react";

interface Props {
  name: string;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextArea = ({
  name,
  placeholder,
  rows,
  value,
  onChange,
  required,
}: Props) => {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
    />
  );
};

export default TextArea;
