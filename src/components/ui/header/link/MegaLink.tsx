interface Props {
  href: string;
  title: string;
}

const MegaLink = ({ href, title }: Props) => {
  return (
    <li className="w-full flex p-3 md:items-center md:justify-center">
      <a
        className="w-full md:max-w md:text-center md:hover:underline md:transition-all md:duration-200"
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default MegaLink;
