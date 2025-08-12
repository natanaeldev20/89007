import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_BYm3Otf6.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { PiSealCheckFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { $ as $$SectionEventNews } from '../chunks/SectionEventNews_BNEk339w.mjs';
import axios from 'axios';
export { renderers } from '../renderers.mjs';

const EventCard = ({
  title,
  description,
  imageUrl,
  startDate,
  endDate,
  createdAt,
  location
}) => {
  return /* @__PURE__ */ jsxs("article", { className: "w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden sm:rounded-xl", children: [
    /* @__PURE__ */ jsxs("header", { className: "w-full p-3 flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ jsxs("figure", { className: "bg-white w-[3.5rem] h-[3.5rem] p-1 flex items-center justify-center rounded-full aspect-square border-2 border-[#e2e4e7]", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full max-w-[1.8rem]",
            src: "logo.PNG",
            alt: "Logo de la Institución Educativa N.º 89007"
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { className: "sr-only" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-base flex flex-row items-center gap-1", children: [
          "Institución Educativa N.º 89007",
          /* @__PURE__ */ jsx(PiSealCheckFill, { color: "#0866ff", width: 16, height: 16 })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm font-semibold", children: [
          "Publicado el",
          " ",
          new Date(createdAt).toLocaleDateString("es-PE", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { src: imageUrl, alt: title, className: "w-full" }),
    /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl text-89007 font-semibold mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FaCalendarAlt, { color: "#000", size: 20 }),
          " ",
          new Date(startDate).toLocaleDateString("es-PE", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FaLocationDot, { color: "#000", size: 20 }),
          " ",
          location
        ] })
      ] })
    ] })
  ] });
};

const API_URL = "https://cpanel89007.vercel.app";
const getEvents = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/school-events/latest`
    );
    if (!Array.isArray(data.events)) {
      throw new Error("Respuesta invalida del servidor");
    }
    return data.events;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error al obtener los eventos: ", error);
    }
    throw new Error("No se pudo obtener los eventos");
  }
};

const $$Eventos = createComponent(async ($$result, $$props, $$slots) => {
  const events = await getEvents();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Eventos | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Eventos Institucionales", "description": "Participa en las actividades m\xE1s importantes del a\xF1o escolar. Desde celebraciones hasta ferias educativas, cada evento fortalece el v\xEDnculo entre estudiantes, docentes y familias.", "url": "https://cademin.org/wp-content/uploads/2024/08/que-es-mejor-estudiar-educacion-infantil-o-primaria.jpg" })} ${renderComponent($$result2, "SectionEventNews", $$SectionEventNews, { "background": "#f2f4f7" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="w-full m-auto grid grid-cols-1 gap-4 sm:max-w-xl"> ${events.map(
    ({
      title,
      description,
      location,
      startDate,
      endDate,
      imageUrl,
      createdAt
    }) => renderTemplate`${renderComponent($$result3, "EventCard", EventCard, { "client:load": true, "title": title, "description": description, "imageUrl": imageUrl, "location": location, "startDate": startDate, "createdAt": createdAt, "endDate": endDate, "client:component-hydration": "load", "client:component-path": "@components/events/EventCard", "client:component-export": "default" })}`
  )} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/eventos.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/eventos.astro";
const $$url = "/eventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eventos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
