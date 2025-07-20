interface Props {
  href: string;
  text: string;
}

const LinkMobile = ({ href, text }: Props) => {
  return (
    <a className="p-3" href={href}>
      {text}
    </a>
  );
};

export default LinkMobile;
