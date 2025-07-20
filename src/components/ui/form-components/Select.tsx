import Option from "@uiComponents/form-components/Option";

interface Options {
  value: string;
  text: string;
}

interface Props {
  options: Options[];
  name: string;
  disabledText: string;
}

const Select = ({ options, name, disabledText }: Props) => {
  return (
    <select
      name={name}
      className="w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
      required
    >
      <option disabled selected>
        {disabledText}
      </option>
      {options.map((option) => (
        <Option text={option.text} value={option.value} />
      ))}
    </select>
  );
};

export default Select;
