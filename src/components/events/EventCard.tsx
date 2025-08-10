import { PiSealCheckFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  createdAt: Date;
}

const EventCard = ({
  title,
  description,
  imageUrl,
  startDate,
  endDate,
  createdAt,
  location,
}: Props) => {
  return (
    <article className="w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden sm:rounded-xl">
      <header className="w-full p-3 flex flex-row items-center gap-3">
        <figure className="bg-white w-[3.5rem] h-[3.5rem] p-1 flex items-center justify-center rounded-full aspect-square border-2 border-[#e2e4e7]">
          <img
            className="w-full max-w-[1.8rem]"
            src="logo.PNG"
            alt="Logo de la Institución Educativa N.º 89007"
          />
          <figcaption className="sr-only"></figcaption>
        </figure>
        <div className="flex flex-col">
          <h4 className="font-semibold text-base flex flex-row items-center gap-1">
            Institución Educativa N.º 89007
            <PiSealCheckFill color="#0866ff" width={16} height={16} />
          </h4>
          <span className="text-gray-500 text-sm font-semibold">
            Publicado el{" "}
            {new Date(createdAt).toLocaleDateString("es-PE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="p-5">
        <h3 className="text-xl text-89007 font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <FaCalendarAlt color="#000" size={20} />{" "}
            {new Date(startDate).toLocaleDateString("es-PE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <FaLocationDot color="#000" size={20} /> {location}
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
