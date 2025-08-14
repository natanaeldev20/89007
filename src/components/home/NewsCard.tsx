interface Props {
  url: string;
  title: string;
}

const NewsCard = ({ url, title }: Props) => {
  return (
    <article className="w-full flex flex-col rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative w-full overflow-hidden">
        <img
          className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
          src={url}
          alt={title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </figure>

      <div className="p-4 flex items-center">
        <h3 className="font-semibold text-lg text-gray-800 leading-snug hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default NewsCard;
