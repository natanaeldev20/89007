interface Props {
  value: string;
  text: string;
}

const Option = ({ value, text }: Props) => {
  return <option value={value}>{text}</option>;
};

export default Option;
