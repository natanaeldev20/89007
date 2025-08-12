import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$HeroSection } from '../../chunks/HeroSection_BYm3Otf6.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../../chunks/Container_Dejq6jGm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { $ as $$Location } from '../../chunks/Location_Bu54Wu1V.mjs';
export { renderers } from '../../renderers.mjs';

const $$InfrastructureIntroduction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="block w-30 h-[10px] bg-89007"></span> <h2 class="text-2xl pt-4 font-bold text-89007 mb-4 md:text-3xl lg:text-3xl">
Un espacio para crecer, aprender y soñar
</h2> <p class="text-base">
En la Institución Educativa N.° 89007 de Chimbote, contamos con una
      infraestructura funcional y acogedora que respalda el desarrollo integral
      de nuestros estudiantes. Nuestras aulas y espacios están diseñados para
      brindar seguridad, comodidad y un entorno propicio para el aprendizaje.
      Mantenemos nuestros ambientes en constante mejora, con el objetivo de
      ofrecer un lugar que fomente la motivación, la participación activa y el
      bienestar de toda la comunidad educativa.
</p> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/about-us/InfrastructureIntroduction.astro", void 0);

const gallery = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158706/IMG_20250625_155404_vjv4rv.jpg",
    title: "Sala de computo de la Institución Educativa N.º 89007 "
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158920/IMG_20250625_162524_ordbyu.jpg",
    title: "Servicios higiénicos de la Institución Educativa N.º 89007"
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158737/IMG_20250625_162415_rqd1se.jpg",
    title: "Colchón de seguridad de la Institución Educativa N.º 89007"
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753058500/colegio_zno2fb.jpg",
    title: "Entrada de la Institución Educativa N.º 89007"
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753056773/image-1_p99cmq.jpg",
    title: "Aula de primaria de la Institución Educativa N.º 89007"
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753059084/servicioss_2_yu2gg3.jpg",
    title: "Patio de juegos de la Institución Educativa N.º 89007"
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158852/IMG_20250625_162547_svdm9j.jpg",
    title: "Cártel del día del campo de la Institución Educativa N.º 89007"
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158674/IMG_20250625_155258_bjxqqp.jpg",
    title: "Laboratorio de computo de la Institución Educativa N.º 89007"
  },
  {
    id: 9,
    url: "https://web.eplasalle.es/wp-content/uploads/2020/11/Juegos-en-la-sala-5-ok-1024x690.jpg",
    title: "Sala de niños"
  }
];

const GalleryItem = ({ url, title }) => {
  const modalRef = useRef(null);
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
  const handleBackdropModal = (e) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "dialog",
      {
        className: "max-w-4xl m-auto outline-none border-none bg-transparent backdrop:bg-[#000000c8]",
        ref: modalRef,
        onClick: handleBackdropModal,
        children: /* @__PURE__ */ jsxs("figure", { className: "w-full p-4 relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full aspect-[9/16] object-cover rounded-t-xl sm:aspect-video",
              src: url,
              alt: title
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-89007 p-4 rounded-b-xl", children: /* @__PURE__ */ jsx("h2", { className: "text-base text-center text-white font-bold md:text-xl", children: title }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute bg-white border-none outline-none top-6 right-6 transition-all duration-300 rounded-full cursor-pointer shadow-xl p-1 text-89007",
              onClick: handleCloseModal,
              children: /* @__PURE__ */ jsx(IoClose, { size: 35 })
            }
          ),
          /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: title })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full aspect-square object-cover cursor-pointer sm:aspect-video",
        src: url,
        alt: title,
        onClick: handleOpenModal
      }
    )
  ] });
};

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3"> ${gallery.map(({ url, title }) => renderTemplate`${renderComponent($$result, "GalleryItem", GalleryItem, { "client:load": true, "url": url, "title": title, "client:component-hydration": "load", "client:component-path": "@components/about-us/GalleryItem", "client:component-export": "default" })}`)} </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/about-us/Gallery.astro", void 0);

const $$Infraestructura = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Infraestructura | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Nuestra Infraestructura", "description": "Contamos con espacios amplios, seguros y equipados que favorecen el aprendizaje, el desarrollo integral y el bienestar de nuestros estudiantes en cada etapa de su formaci\xF3n.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753142718/IMG_20250625_164020_aduxgr.jpg" })} ${renderComponent($$result2, "InfrastructureIntroduction", $$InfrastructureIntroduction, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/infraestructura.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/infraestructura.astro";
const $$url = "/nosotros/infraestructura";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Infraestructura,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
