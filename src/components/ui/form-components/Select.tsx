import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Option {
  value: string | number;
  label: string;
}
interface SelectInputProps {
  label?: string;
  options: Option[];
  disabled?: boolean;
  className?: string;
  noValue?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const Select = ({
  label,
  options,
  disabled = false,
  className = "",
  noValue,
  register,
  error,
}: SelectInputProps) => {
  return (
    <select
      {...register}
      disabled={disabled}
      className="w-full border-gray-300 text-gray-500 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
    >
      <option value="">{noValue}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
