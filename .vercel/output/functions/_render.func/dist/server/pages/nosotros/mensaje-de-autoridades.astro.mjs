import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$HeroSection } from '../../chunks/HeroSection_BYm3Otf6.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../../chunks/Container_Dejq6jGm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { FaEye } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useRef } from 'react';
import axios from 'axios';
import { $ as $$Location } from '../../chunks/Location_Bu54Wu1V.mjs';
export { renderers } from '../../renderers.mjs';

const AuthorityCard = ({ src, alt, name, lastName, role, message }) => {
  const modalRef = useRef(null);
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
  const handleBackdropClose = (e) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "dialog",
      {
        className: "w-full max-w-5xl m-auto p-4 bg-transparent backdrop:bg-[#000000c8]",
        onClick: handleBackdropClose,
        ref: modalRef,
        children: /* @__PURE__ */ jsxs("div", { className: "w-full relative bg-white grid grid-cols-1 md:grid-cols-2 rounded-xl shadow-xl", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute p-1 bg-89007 cursor-pointer shadow-xl rounded-full right-2 top-2",
              onClick: handleCloseModal,
              children: /* @__PURE__ */ jsx(IoClose, { size: 35, color: "#fff" })
            }
          ),
          /* @__PURE__ */ jsx("figure", { className: "w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full object-cover aspect-square rounded-t-xl md:rounded-l-xl md:rounded-t-none h-full",
              src,
              alt
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "w-full p-8 pr-14", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base mb-4", children: message }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-89007", children: [
              name,
              " ",
              lastName,
              ", ",
              role
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "w-full ", children: [
      /* @__PURE__ */ jsxs("figure", { className: "w-full relative flex items-center justify-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full aspect-square rounded-xl shadow-xl object-cover",
            src,
            alt
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-max absolute cursor-pointer transition-all duration-300 hover:scale-[1.2]",
            onClick: handleOpenModal,
            children: /* @__PURE__ */ jsx(FaEye, { size: 80, color: "#fff" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-[1.1em] font-semibold text-89007", children: [
          name,
          " ",
          lastName
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: role })
      ] })
    ] })
  ] });
};

const API_URL = "https://cpanel89007.vercel.app";
const getAuthority = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/authority`
    );
    if (!Array.isArray(data.authority)) {
      throw new Error("Respuesta invalida del servidor");
    }
    return data.authority;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error al obtener las autoridades: ", error);
    }
    throw new Error("No se pudo obtener las autoridades");
  }
};

const $$AuthoritiesSection = createComponent(async ($$result, $$props, $$slots) => {
  const authority = await getAuthority();
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"> ${authority.map(({ rol, name, lastName, message, imageUrl }) => renderTemplate`${renderComponent($$result3, "AuthorityCard", AuthorityCard, { "client:load": true, "src": imageUrl, "alt": rol, "name": name, "lastName": lastName, "role": rol, "message": message, "client:component-hydration": "load", "client:component-path": "@components/about-us/AuthorityCard", "client:component-export": "default" })}`)} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/about-us/AuthoritiesSection.astro", void 0);

const $$MensajeDeAutoridades = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mensaje de autoridades | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Mensaje de Nuestras Autoridades", "description": "Palabras de liderazgo y compromiso que reflejan nuestra visi\xF3n educativa y el trabajo constante por brindar una formaci\xF3n de calidad a nuestros estudiantes.", "url": "https://www.uandes.cl/wp-content/uploads/2024/12/Desayuno-Directores-Colegios-Rectoria-y-Admision-Noviembre-2024-scaled.jpg" })} ${renderComponent($$result2, "AuthoritiesSection", $$AuthoritiesSection, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/mensaje-de-autoridades.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/mensaje-de-autoridades.astro";
const $$url = "/nosotros/mensaje-de-autoridades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MensajeDeAutoridades,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
