import Link from "./link/Link";
import LinkMobile from "./link/LinkMobile";
import MegaLink from "./link/MegaLink";
import { routes } from "./routes/routes";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const megaMenu = useRef<HTMLUListElement | null>(null);

  const handleMegaMenu = () => {
    megaMenu.current?.classList.toggle("hidden");
  };

  const handleClick = () => {
    menuRef.current?.classList.toggle("hidden");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 py-3">
          <img src="/logo.PNG" alt="logo" className="w-8 sm:w-10" />
          <span className="text-lg font-medium text-89007 sm:text-xl">
            I.E. 89007
          </span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Nosotros <IoIosArrowDown className="mt-[1px]" />
            </button>
            <ul className="absolute left-0 top-full w-max p-6 gap-6 grid grid-cols-1 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out">
              <MegaLink
                href="/nosotros/quienes-somos"
                title="¿Quiénes Somos?"
              />
              <MegaLink
                href="/nosotros/mensaje-de-autoridades"
                title="Autoridades"
              />
              <MegaLink href="/nosotros/historia" title="Historia" />
              <MegaLink
                href="/nosotros/infraestructura"
                title="Infraestructura"
              />
              <MegaLink href="/nosotros/servicios" title="Servicios" />
              <MegaLink
                href="/nosotros/formacion-integral"
                title="Formación Integral"
              />
            </ul>
          </div>
          {routes.map(({ id, href, text }) => (
            <Link key={id} href={href} text={text} />
          ))}
        </nav>

        {/* Botón Mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="#1e40af"
              d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        ref={menuRef}
        className="md:hidden hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <ul className="flex flex-col p-4 text-gray-800">
          <li>
            <button
              className="w-full flex justify-between items-center py-3 font-medium hover:text-blue-600 transition-colors"
              onClick={handleMegaMenu}
            >
              Nosotros <IoIosArrowDown />
            </button>
            <ul ref={megaMenu} className="flex flex-col pl-4 gap-2 hidden">
              <MegaLink
                href="/nosotros/quienes-somos"
                title="¿Quiénes Somos?"
              />
              <MegaLink
                href="/nosotros/mensaje-de-autoridades"
                title="Autoridades"
              />
              <MegaLink href="/nosotros/historia" title="Historia" />
              <MegaLink
                href="/nosotros/infraestructura"
                title="Infraestructura"
              />
              <MegaLink href="/nosotros/servicios" title="Servicios" />
              <MegaLink
                href="/nosotros/formacion-integral"
                title="Formación Integral"
              />
            </ul>
          </li>
          {routes.map(({ id, href, text }) => (
            <LinkMobile key={id} href={href} text={text} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

// import Link from "./link/Link";
// import LinkMobile from "./link/LinkMobile";
// import MegaLink from "./link/MegaLink";
// import { routes } from "./routes/routes";
// import { useRef } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const Header = () => {
//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const megaMenu = useRef<HTMLUListElement | null>(null);

//   const handleMegaMenu = () => {
//     if (megaMenu.current) {
//       megaMenu.current.classList.toggle("not-sr-only");
//     }
//   };

//   const handleClick = () => {
//     if (menuRef.current) {
//       menuRef.current.classList.toggle("hidden");
//     }
//   };

//   return (
//     <header className="w-full bg-white z-10 sticky top-0">
//       <div className="relative w-full">
//         <div className="max-w-7xl px-6 m-auto flex items justify-between center">
//           <figure className="py-4">
//             <a href="/" className="flex items-center gap-4">
//               <img
//                 className="w-full max-w-[2rem] sm:max-w-[2.5rem]"
//                 src="/logo.PNG"
//                 alt="logo"
//               />
//               <span className="text-lg font-medium text-89007 sm:text-xl">
//                 I.E. 89007
//               </span>
//             </a>
//           </figure>
//           <nav className="flex items-center sr-only md:not-sr-only">
//             <ul className="h-full flex flex-row items-center text-lg text-89007 gap-4">
//               <li className="h-full flex group">
//                 <a
//                   className="h-full flex  items-center justify-center gap-2 px-4"
//                   href="/nosotros"
//                 >
//                   Nosotros <IoIosArrowDown />
//                 </a>
//                 <ul className="absolute left-0 top-21 w-full p-8 gap-8 grid md:grid-cols-3 lg:grid-cols-6 bg-white translate-x-[-100%] transition-all duration-500 group-hover:translate-x-0">
//                   <MegaLink
//                     href="/nosotros/quienes-somos"
//                     title="¿Quiénes Somos?"
//                   />
//                   <MegaLink
//                     href="/nosotros/mensaje-de-autoridades"
//                     title="Autoridades"
//                   />
//                   <MegaLink href="/nosotros/historia" title="Historia" />
//                   <MegaLink
//                     href="/nosotros/infraestructura"
//                     title="Infraestructura"
//                   />
//                   <MegaLink href="/nosotros/servicios" title="Servicios" />
//                   <MegaLink
//                     href="/nosotros/formacion-integral"
//                     title="Formación Integral"
//                   />
//                 </ul>
//               </li>
//               {routes.map(({ id, href, text }) => (
//                 <Link key={id} href={href} text={text} />
//               ))}
//             </ul>
//           </nav>
//           <button className="cursor-pointer md:sr-only" onClick={handleClick}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="35"
//               height="35"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="#039fcf"
//                 d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
//               />
//             </svg>
//           </button>
//         </div>
//         <div ref={menuRef} className="w-full pt-8 text-lg hidden">
//           <ul className="flex flex-col text-89007">
//             <li className="w-full">
//               <button
//                 className="w-full flex cursor-pointer p-3 flex-row items-center gap-2"
//                 onClick={handleMegaMenu}
//               >
//                 Nosotros <IoIosArrowDown />
//               </button>
//               <ul className="w-full flex flex-col sr-only" ref={megaMenu}>
//                 <MegaLink
//                   href="/nosotros/quienes-somos"
//                   title="¿Quiénes Somos?"
//                 />
//                 <MegaLink
//                   href="/nosotros/mensaje-de-autoridades"
//                   title="Autoridades"
//                 />
//                 <MegaLink href="/nosotros/historia" title="Historia" />
//                 <MegaLink
//                   href="/nosotros/infraestructura"
//                   title="Infraestructura"
//                 />
//                 <MegaLink href="/nosotros/servicios" title="Servicios" />
//                 <MegaLink
//                   href="/nosotros/formacion-integral"
//                   title="Formación Integral"
//                 />
//               </ul>
//             </li>
//             {routes.map(({ id, href, text }) => (
//               <LinkMobile key={id} href={href} text={text} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
