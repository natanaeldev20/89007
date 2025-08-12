interface Props {
  url: string;
  title: string;
}

const NewsCard = ({ url, title }: Props) => {
  return (
    <article className="w-full flex flex-col gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] rounded-xl">
      <figure className="w-full">
        <img
          className="w-full aspect-video object-cover rounded-t-xl shadow-xl"
          src={url}
          alt={title}
          loading="lazy"
        />
      </figure>
      <div className="p-4">
        <h3 className="font-normal text-base">{title}</h3>
      </div>
    </article>
  );
};

export default NewsCard;
