interface Props {
  href: string;
  text: string;
}

const Link = ({ href, text }: Props) => {
  return (
    <a className="max-w p-1 flex items-center justify-center" href={href}>
      {text}
    </a>
  );
};

export default Link;
