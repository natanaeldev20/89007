import Link from "./link/Link";
import LinkMobile from "./link/LinkMobile";
import { routes } from "./routes/routes";
import { useRef } from "react";

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header className="w-full bg-white z-10 sticky top-0 py-4 px-6">
      <div className="max-w-7xl m-auto flex items justify-between center">
        <figure>
          <a href="/" className="flex items-center gap-4">
            <img
              className="w-full max-w-[2rem] sm:max-w-[2.5rem]"
              src="/logo.PNG"
              alt="logo"
            />
            <span className="text-lg font-medium text-89007 sm:text-xl">
              I.E. 89007
            </span>
          </a>
        </figure>
        <nav className="flex items-center sr-only md:not-sr-only">
          <ul className="flex flex-row items-center text-lg gap-4 text-89007">
            {routes.map(({ href, text }) => (
              <Link href={href} text={text} />
            ))}
          </ul>
        </nav>
        <button className="cursor-pointer md:sr-only" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              fill="#039fcf"
              d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
            />
          </svg>
        </button>
      </div>
      <div ref={menuRef} className="w-full pt-8 text-lg hidden">
        <ul className="flex flex-col text-89007">
          {routes.map(({ href, text }) => (
            <LinkMobile href={href} text={text} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
