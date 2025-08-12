import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, e as addAttribute, o as renderScript, r as renderComponent, f as renderHead, d as renderSlot } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
/* empty css                           */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import 'clsx';
/* empty css                           */

const Link = ({ href, text }) => {
  return /* @__PURE__ */ jsx("a", { className: "max-w p-1 flex items-center justify-center", href, children: text });
};

const LinkMobile = ({ href, text }) => {
  return /* @__PURE__ */ jsx("a", { className: "p-3", href, children: text });
};

const MegaLink = ({ href, title }) => {
  return /* @__PURE__ */ jsx("li", { className: "w-full flex p-3 md:items-center md:justify-center", children: /* @__PURE__ */ jsx(
    "a",
    {
      className: "w-full md:max-w md:text-center md:hover:underline md:transition-all md:duration-200",
      href,
      children: title
    }
  ) });
};

const routes = [
  { id: 2, href: "/niveles", text: "Niveles" },
  { id: 3, href: "/noticias", text: "Noticias" },
  { id: 4, href: "/eventos", text: "Eventos" }
];

const Header = () => {
  const menuRef = useRef(null);
  const megaMenu = useRef(null);
  const handleMegaMenu = () => {
    if (megaMenu.current) {
      megaMenu.current.classList.toggle("not-sr-only");
    }
  };
  const handleClick = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
    }
  };
  return /* @__PURE__ */ jsx("header", { className: "w-full bg-white z-10 sticky top-0", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl px-6 m-auto flex items justify-between center", children: [
      /* @__PURE__ */ jsx("figure", { className: "py-4", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full max-w-[2rem] sm:max-w-[2.5rem]",
            src: "/logo.PNG",
            alt: "logo"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-89007 sm:text-xl", children: "I.E. 89007" })
      ] }) }),
      /* @__PURE__ */ jsx("nav", { className: "flex items-center sr-only md:not-sr-only", children: /* @__PURE__ */ jsxs("ul", { className: "h-full flex flex-row items-center text-lg text-89007 gap-4", children: [
        /* @__PURE__ */ jsxs("li", { className: "h-full flex group", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "h-full flex  items-center justify-center gap-2 px-4",
              href: "/nosotros",
              children: [
                "Nosotros ",
                /* @__PURE__ */ jsx(IoIosArrowDown, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxs("ul", { className: "absolute left-0 top-21 w-full p-8 gap-8 grid md:grid-cols-3 lg:grid-cols-6 bg-white translate-x-[-100%] transition-all duration-500 group-hover:translate-x-0", children: [
            /* @__PURE__ */ jsx(
              MegaLink,
              {
                href: "/nosotros/quienes-somos",
                title: "¿Quiénes Somos?"
              }
            ),
            /* @__PURE__ */ jsx(
              MegaLink,
              {
                href: "/nosotros/mensaje-de-autoridades",
                title: "Autoridades"
              }
            ),
            /* @__PURE__ */ jsx(MegaLink, { href: "/nosotros/historia", title: "Historia" }),
            /* @__PURE__ */ jsx(
              MegaLink,
              {
                href: "/nosotros/infraestructura",
                title: "Infraestructura"
              }
            ),
            /* @__PURE__ */ jsx(MegaLink, { href: "/nosotros/servicios", title: "Servicios" }),
            /* @__PURE__ */ jsx(
              MegaLink,
              {
                href: "/nosotros/formacion-integral",
                title: "Formación Integral"
              }
            )
          ] })
        ] }),
        routes.map(({ id, href, text }) => /* @__PURE__ */ jsx(Link, { href, text }, id))
      ] }) }),
      /* @__PURE__ */ jsx("button", { className: "cursor-pointer md:sr-only", onClick: handleClick, children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "35",
          height: "35",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#039fcf",
              d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: menuRef, className: "w-full pt-8 text-lg hidden", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col text-89007", children: [
      /* @__PURE__ */ jsxs("li", { className: "w-full", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "w-full flex cursor-pointer p-3 flex-row items-center gap-2",
            onClick: handleMegaMenu,
            children: [
              "Nosotros ",
              /* @__PURE__ */ jsx(IoIosArrowDown, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "w-full flex flex-col sr-only", ref: megaMenu, children: [
          /* @__PURE__ */ jsx(
            MegaLink,
            {
              href: "/nosotros/quienes-somos",
              title: "¿Quiénes Somos?"
            }
          ),
          /* @__PURE__ */ jsx(
            MegaLink,
            {
              href: "/nosotros/mensaje-de-autoridades",
              title: "Autoridades"
            }
          ),
          /* @__PURE__ */ jsx(MegaLink, { href: "/nosotros/historia", title: "Historia" }),
          /* @__PURE__ */ jsx(
            MegaLink,
            {
              href: "/nosotros/infraestructura",
              title: "Infraestructura"
            }
          ),
          /* @__PURE__ */ jsx(MegaLink, { href: "/nosotros/servicios", title: "Servicios" }),
          /* @__PURE__ */ jsx(
            MegaLink,
            {
              href: "/nosotros/formacion-integral",
              title: "Formación Integral"
            }
          )
        ] })
      ] }),
      routes.map(({ id, href, text }) => /* @__PURE__ */ jsx(LinkMobile, { href, text }, id))
    ] }) })
  ] }) });
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-89007 text-white py-12 p-4"> <div class="w-full max-w-6xl m-auto"> <div class="text-center"> <p class="text-xl mb-8 md:text-2xl"> <span class="font-bold">Educación integral</span> que transforma. ¡Pregunta
        por ella!
</p> </div> <figure class="w-full flex items-center justify-center pb-12"> <a href="/reclamos/libro-reclamaciones" target="_blank"> <img class="w-full max-w-[15rem]" src="https://www.sutran.gob.pe/wp-content/uploads/2022/11/logo_libro_reclam.jpg" alt=""> </a> </figure> <div class="border-t-2 border-white py-8 flex flex-col gap-12 justify-between md:gap-0 md:flex-row"> <ul class="flex items-center underline gap-8 flex-col md:flex-row"> <a href="/reclamos/libro-reclamaciones" target="_blank">Libro de reclamaciones</a> <a href="/terminos-y-condiciones-de-uso">Términos y condiciones</a> <a href="/politicas-de-privacidad">Políticas de privacidad</a> </ul> <ul class="flex flex-row items-center gap-4 justify-center md:justify-normal"> <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#fff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"></path></svg> </a> <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="#fff" fill-rule="evenodd" d="M12.91 12.909c.326-.327.582-.72.749-1.151c.16-.414.27-.886.302-1.578s.04-.915.04-2.68s-.008-1.987-.04-2.68c-.032-.692-.142-1.164-.302-1.578a3.2 3.2 0 0 0-.75-1.151a3.2 3.2 0 0 0-1.151-.75c-.414-.16-.886-.27-1.578-.302S9.265 1 7.5 1s-1.987.007-2.68.04c-.692.03-1.164.14-1.578.301a3.2 3.2 0 0 0-1.151.75a3.2 3.2 0 0 0-.75 1.151c-.16.414-.27.886-.302 1.578S1 5.735 1 7.5s.007 1.987.04 2.68c.03.692.14 1.164.301 1.578c.164.434.42.826.75 1.151c.325.33.718.586 1.151.75c.414.16.886.27 1.578.302S5.735 14 7.5 14s1.987-.008 2.68-.04c.692-.03 1.164-.14 1.578-.301a3.3 3.3 0 0 0 1.151-.75M2 6.735v1.53c-.002.821-.002 1.034.02 1.5c.026.586.058 1.016.156 1.34c.094.312.199.63.543 1.012c.344.383.675.556 1.097.684c.423.127.954.154 1.415.175c.522.024.73.024 1.826.024H8.24c.842.001 1.054.002 1.526-.02c.585-.027 1.015-.059 1.34-.156c.311-.094.629-.2 1.011-.543c.383-.344.556-.676.684-1.098c.127-.422.155-.953.176-1.414C13 9.247 13 9.04 13 7.947v-.89c0-1.096 0-1.303-.023-1.826c-.021-.461-.049-.992-.176-1.414c-.127-.423-.3-.754-.684-1.098c-.383-.344-.7-.449-1.011-.543c-.325-.097-.755-.13-1.34-.156A27 27 0 0 0 8.24 2H7.057c-1.096 0-1.304 0-1.826.023c-.461.021-.992.049-1.415.176c-.422.128-.753.301-1.097.684s-.45.7-.543 1.012c-.098.324-.13.754-.156 1.34c-.022.466-.022.679-.02 1.5M7.5 5.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M4.25 7.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m6.72-2.72a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></path></svg> </a> <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964a2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.84 2.84 0 0 0-1.983.839a4.2 4.2 0 0 0-.79 1.965a30 30 0 0 0-.2 3.206v1.5a30 30 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972c.604.536 1.38.837 2.187.848c1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.84 2.84 0 0 0 1.985-.84a4.3 4.3 0 0 0 .787-1.965a30 30 0 0 0 .2-3.206v-1.516a31 31 0 0 0-.202-3.206m-11.692 6.554v-5.62l5.4 2.819z" clip-rule="evenodd"></path></svg> </a> </ul> </div> </div> </footer>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/ui/footer/Footer.astro", void 0);

const WhatsAppButton = () => {
  const phoneNumber = "992232493";
  const message = "Necesito informacion sobre el proceso de admision.";
  const handleClick = () => {
    const URL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(URL, "_blank");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "p-2 bg-[#25d366] flex items-center justify-center rounded-full fixed bottom-5 right-5 z-10 cursor-pointer shadow-2xs transition-all duration-300 hover:shadow-2xl",
      id: "btn-ws",
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "55",
          height: "55",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#fff",
              d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
            }
          )
        }
      )
    }
  );
};

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/natan/Escritorio/project/institucioneducativa89007/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="shortcut icon" href="/logo-89007-v2.png" type="image/x-icon"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderComponent($$result, "WhatsAppButton", WhatsAppButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/WhatsAppButton", "client:component-export": "default", "data-astro-cid-37fxchfa": true })} ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/header/Header", "client:component-export": "default", "data-astro-cid-37fxchfa": true })} <main class="w-full" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
