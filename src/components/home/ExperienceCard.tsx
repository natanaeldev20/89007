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
      {/* MODAL */}
      <dialog
        className="m-auto max-w-[55rem] bg-transparent outline-none border-none backdrop:bg-[#000000c8]"
        ref={modalRef}
        onClick={handleBackdropClose}
      >
        <div className="px-4 sm:px-6 md:px-8">
          <article className="w-full bg-white relative rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]">
            <figure className="w-full bg-amber-300 flex justify-end flex-col items-center px-4 pt-4 shadow-inner">
              <img
                className="w-full max-w-[12rem] md:max-w-[18rem] drop-shadow-lg animate-float"
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
              className="absolute bg-89007 top-2 right-2 transition-all duration-300 rounded-full cursor-pointer shadow-xl p-1 text-white hover:rotate-90"
              onClick={handleCloseModal}
            >
              <IoClose size={35} />
            </button>
          </article>
        </div>
      </dialog>

      {/* CARD */}
      <article className="w-full relative shadow-lg rounded-3xl overflow-visible transition-transform duration-400 hover:-translate-y-2">
        <figure className="w-full pt-8 pl-8 pr-8 flex items-center justify-center bg-amber-300 rounded-t-3xl relative overflow-visible">
          <img
            src={url}
            alt={alt}
            className="w-full max-w-[10rem] aspect-[9/16] object-cover md:max-w-[13rem] lg:max-w-[15rem] drop-shadow-xl"
          />
          <button
            className="absolute bottom-4 right-4 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={handleOpenModal}
          >
            <FaEye size={60} color="#ffffffe2" />
          </button>
        </figure>
        <div
          className="w-full p-4 rounded-b-3xl"
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
