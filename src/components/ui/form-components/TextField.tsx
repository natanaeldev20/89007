interface Props {
  type: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ type, placeholder, onChange }: Props) => {
  return (
    <input
      className="w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextField;
