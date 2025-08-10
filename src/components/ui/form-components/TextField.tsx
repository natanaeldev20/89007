import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextFieldProps {
  autoFocus?: boolean;
  type: "text" | "email" | "number";
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const TextField = ({ type, placeholder, register, error }: TextFieldProps) => {
  return (
    <div className="w-full">
      <input
        className="w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
        type={type}
        {...register}
        placeholder={placeholder}
      />
      {error?.message && (
        <span className="text-red-600 text-sm font-medium">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
