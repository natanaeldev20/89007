interface Props {
  href: string;
  text: string;
}

const Link = ({ href, text }: Props) => {
  return (
    <a
      className="p-3 rounded-lg transition-all duration-200 hover:text-white hover:bg-[#039fcf]"
      href={href}
    >
      {text}
    </a>
  );
};

export default Link;
