interface Props {
  name: string;
  value: string;
}

const Date = ({ name, value }: Props) => {
  return (
    <input
      type="date"
      className="w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
      name={name}
      value={value}
    />
  );
};

export default Date;
