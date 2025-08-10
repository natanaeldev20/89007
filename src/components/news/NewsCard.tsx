import { PiSealCheckFill } from "react-icons/pi";

interface Props {
  title: string;
  description: string;
  publicationDate: Date;
  url: string;
}

const NewsCard = ({ title, description, publicationDate, url }: Props) => {
  return (
    <article className="w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] sm:rounded-xl">
      <header className="w-full p-3 flex flex-row items-center gap-3">
        <figure className="bg-white w-[3.5rem] h-[3.5rem] p-1 flex items-center justify-center rounded-full aspect-square border-2 border-[#e2e4e7]">
          <img
            className="w-full max-w-[1.8rem]"
            src="logo.PNG"
            alt="Logo de la Institución Educativa N.º 89007"
          />
          <figcaption className="sr-only">{title}</figcaption>
        </figure>
        <div className="flex flex-col">
          <h4 className="font-semibold text-base flex flex-row items-center gap-1">
            Institución Educativa N.º 89007
            <PiSealCheckFill color="#0866ff" width={16} height={16} />
          </h4>
          <span className="text-gray-500 text-sm font-semibold">
            Publicado el{" "}
            {new Date(publicationDate).toLocaleDateString("es-PE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>
      <img src={url} alt={title} className="w-full" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#039fcf] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
    </article>
  );
};

export default NewsCard;
