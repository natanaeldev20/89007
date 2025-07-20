import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useRef } from "react";

interface Props {
  url: string;
  alt: string;
  name: string;
  role: string;
  color: string;
  content: string;
}

const ExperienceCard = ({ url, alt, name, role, color, content }: Props) => {
  //Refs
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      document.body.style.overflow = "auto";
    }
  };

  const handleBackdropClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };

  return (
    <>
      <dialog
        className="m-auto max-w-[55rem] bg-transparent outline-none border-none backdrop:bg-[#000000c8]"
        ref={modalRef}
        onClick={handleBackdropClose}
      >
        <div className="px-4 bg-transparent sm:px-6 md:px-8">
          <article className="w-full bg-white relative rounded-2xl grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]">
            <figure className="w-full bg-amber-300 flex justify-end flex-col items-center px-4 pt-4 rounded-tr-2xl rounded-tl-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-2xl shadow-xl">
              <img
                className="w-full max-w-[10rem] md:max-w-[18rem] lg:max-w-[18rem]"
                src={url}
                alt={alt}
              />
            </figure>
            <div className="p-4 text-base text-[#6c83ab] md:p-8 md:pr-15">
              <p className="text-base mb-4">{content}</p>
              <p className="text-base font-medium capitalize text-89007">
                Estudiante, {name}
              </p>
            </div>
            <button
              className="absolute bg-89007 top-2 right-2 transition-all duration-300 rounded-full cursor-pointer shadow-2xl p-1 text-white md:bg-transparent md:text-89007"
              onClick={handleCloseModal}
            >
              <IoClose size={35} />
            </button>
          </article>
        </div>
      </dialog>
      <article className="w-full relative shadow-xl rounded-2xl">
        <figure className="w-full pt-8 pl-8 pr-8 flex items-center justify-center bg-amber-300 bg-center bg-auto rounded-tl-2xl rounded-tr-2xl">
          <img
            src={url}
            alt={alt}
            className="w-full max-w-[10rem] aspect-[9/16] object-cover md:w-full md:max-w-[13rem] lg:w-full"
          />
          <button
            className="absolute cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.2]"
            onClick={handleOpenModal}
          >
            <FaEye size={80} color="#ffffffe2" />
          </button>
        </figure>
        <div
          className="w-full p-4 rounded-bl-2xl rounded-br-2xl"
          style={{ backgroundColor: `${color}` }}
        >
          <p className="text-2xl capitalize font-semibold text-white text-center mb-1">
            {name}
          </p>
          <p className="text-xs uppercase text-white text-center">{role}</p>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
