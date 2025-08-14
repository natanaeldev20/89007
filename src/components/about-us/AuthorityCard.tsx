import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

interface Props {
  src: string;
  alt: string;
  name: string;
  lastName: string;
  role: string;
  message: string;
}

const AuthorityCard = ({ src, alt, name, lastName, role, message }: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
    document.body.style.overflow = "auto";
  };

  const handleBackdropClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) handleCloseModal();
  };

  return (
    <>
      {/* Modal */}
      <dialog
        className="w-full max-w-5xl m-auto p-4 bg-transparent backdrop:bg-black/70 animate-fadeIn"
        onClick={handleBackdropClose}
        ref={modalRef}
      >
        <div className="w-full relative bg-white/90 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
          {/* Cerrar */}
          <button
            className="absolute p-1 bg-89007 cursor-pointer shadow-md rounded-full right-4 top-4 hover:scale-110 transition-transform"
            onClick={handleCloseModal}
          >
            <IoClose size={30} color="#fff" />
          </button>

          {/* Imagen modal */}
          <figure className="w-full">
            <img
              className="w-full h-full object-cover aspect-square md:rounded-l-2xl"
              src={src}
              alt={alt}
            />
          </figure>

          {/* Texto modal */}
          <div className="w-full p-8 flex flex-col justify-center">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              {message}
            </p>
            <p className="text-base font-semibold text-89007">
              {name} {lastName}
            </p>
            <span className="text-sm text-gray-500">{role}</span>
          </div>
        </div>
      </dialog>

      {/* Card */}
      <article className="w-full group">
        <figure className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            src={src}
            alt={alt}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              className="p-4 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={handleOpenModal}
            >
              <FaEye size={40} color="#fff" />
            </button>
          </div>
        </figure>

        {/* Info */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-89007">
            {name} {lastName}
          </h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </article>
    </>
  );
};

export default AuthorityCard;

// import { FaEye } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import { useRef } from "react";

// interface Props {
//   src: string;
//   alt: string;
//   name: string;
//   lastName: string;
//   role: string;
//   message: string;
// }

// const AuthorityCard = ({ src, alt, name, lastName, role, message }: Props) => {
//   const modalRef = useRef<HTMLDialogElement | null>(null);

//   const handleOpenModal = () => {
//     if (modalRef.current) {
//       modalRef.current.showModal();
//       document.body.style.overflow = "hidden";
//     }
//   };

//   const handleCloseModal = () => {
//     if (modalRef.current) {
//       modalRef.current.close();
//       document.body.style.overflow = "auto";
//     }
//   };

//   const handleBackdropClose = (e: React.MouseEvent<HTMLDialogElement>) => {
//     if (e.target === modalRef.current) {
//       handleCloseModal();
//     }
//   };

//   return (
//     <>
//       <dialog
//         className="w-full max-w-5xl m-auto p-4 bg-transparent backdrop:bg-[#000000c8]"
//         onClick={handleBackdropClose}
//         ref={modalRef}
//       >
//         <div className="w-full relative bg-white grid grid-cols-1 md:grid-cols-2 rounded-xl shadow-xl">
//           <button
//             className="absolute p-1 bg-89007 cursor-pointer shadow-xl rounded-full right-2 top-2"
//             onClick={handleCloseModal}
//           >
//             <IoClose size={35} color="#fff" />
//           </button>
//           <figure className="w-full">
//             <img
//               className="w-full object-cover aspect-square rounded-t-xl md:rounded-l-xl md:rounded-t-none h-full"
//               src={src}
//               alt={alt}
//             />
//           </figure>
//           <div className="w-full p-8 pr-14">
//             <p className="text-base mb-4">{message}</p>
//             <p className="text-sm font-medium text-89007">
//               {name} {lastName}, {role}
//             </p>
//           </div>
//         </div>
//       </dialog>
//       <article className="w-full ">
//         <figure className="w-full relative flex items-center justify-center">
//           <img
//             className="w-full aspect-square rounded-xl shadow-xl object-cover"
//             src={src}
//             alt={alt}
//           />
//           <button
//             className="w-max absolute cursor-pointer transition-all duration-300 hover:scale-[1.2]"
//             onClick={handleOpenModal}
//           >
//             <FaEye size={80} color="#fff" />
//           </button>
//         </figure>
//         <div className="p-4 text-center">
//           <h3 className="text-[1.1em] font-semibold text-89007">
//             {name} {lastName}
//           </h3>
//           <p className="text-sm font-medium">{role}</p>
//         </div>
//       </article>
//     </>
//   );
// };

// export default AuthorityCard;
