import { useRef } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  url: string;
  title: string;
}

const GalleryItem = ({ url, title }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      document.body.style.overflow = "hidden";
      modalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      document.body.style.overflow = "auto";
      modalRef.current.close();
    }
  };

  const handleBackdropModal = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };

  return (
    <>
      <dialog
        className="max-w-4xl m-auto outline-none border-none bg-transparent backdrop:bg-[#000000c8]"
        ref={modalRef}
        onClick={handleBackdropModal}
      >
        <figure className="w-full p-4 relative">
          <img
            className="w-full aspect-[9/16] object-cover rounded-t-xl sm:aspect-video"
            src={url}
            alt={title}
          />
          <div className="w-full bg-89007 p-4 rounded-b-xl">
            <h2 className="text-base text-center text-white font-bold md:text-xl">
              {title}
            </h2>
          </div>
          <button
            className="absolute bg-white border-none outline-none top-6 right-6 transition-all duration-300 rounded-full cursor-pointer shadow-xl p-1 text-89007"
            onClick={handleCloseModal}
          >
            <IoClose size={35} />
          </button>
          <figcaption className="sr-only">{title}</figcaption>
        </figure>
      </dialog>
      <img
        className="w-full aspect-square object-cover cursor-pointer sm:aspect-video"
        src={url}
        alt={title}
        onClick={handleOpenModal}
      />
    </>
  );
};

export default GalleryItem;
