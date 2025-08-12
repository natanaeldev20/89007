import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$Button } from '../chunks/Button_cp4y085m.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../chunks/Container_Dejq6jGm.mjs';
import { $ as $$Location } from '../chunks/Location_Bu54Wu1V.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_BYm3Otf6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardUs;
  const { url, title, description, bg, route } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full shadow-xl transition-all duration-400 h-full grid grid-rows-[auto_1fr] overflow-hidden rounded-xl lg:hover:transform-[scale(1.03)] lg:hover:shadow-2xl"> <figure class="w-full"> <img class="w-full object-cover rounded-t-xl aspect-square"${addAttribute(url, "src")}${addAttribute(title, "alt")} loading="lazy"> </figure> <div class="w-full p-6 rounded-b-xl"${addAttribute(`background-color: ${bg};`, "style")}> <h2 class="text-white uppercase font-bold text-center mb-8 text-xl md:text-[1.5em] lg:text-[1.5em]"> ${title} </h2> <p class="text-white text-lg mb-8">${description}</p> <div class="flex items-center justify-center"> ${renderComponent($$result, "Button", $$Button, { "url": route, "bg": "#039fcf", "color": "#fff", "transform": "none", "weight": "600", "text": "Conoce m\xE1s" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"></path></svg> ` })} </div> </div> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/about-us/CardUs.astro", void 0);

const us = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/colegio_zno2fb.jpg",
    title: "Quiénes somos",
    description: "",
    bg: "#3b63c2",
    route: "/nosotros/quienes-somos"
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/director_z29nuk.jpg",
    title: "Mensaje de autoridades",
    description: "",
    bg: "#fdc700",
    route: "/nosotros/mensaje-de-autoridades"
  },
  {
    id: 3,
    url: "https://www.sir.edu.pe/storage/2025/02/6.jpg",
    // No se puede optimizar desde Cloudinary
    title: "Historia",
    description: "",
    bg: "#ff640a",
    route: "/nosotros/historia"
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/infraestructura_hsladx.jpg",
    title: "Infraestructura",
    description: "",
    bg: "#7651b8",
    route: "/nosotros/infraestructura"
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/servicioss_2_yu2gg3.jpg",
    title: "Servicios",
    description: "",
    bg: "#c10007",
    route: "/nosotros/servicios"
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/formacion_mimwxq.jpg",
    title: "Formación Integral I.E 89007",
    description: "",
    bg: "#00a63e",
    route: "/nosotros/formacion-integral"
  }
];

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"> ${us.map(({ url, title, description, bg, route }) => renderTemplate`${renderComponent($$result3, "CardUs", $$CardUs, { "url": url, "title": title, "description": description, "bg": bg, "route": route })}`)} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/about-us/AboutUs.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Nosotros | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Con\xF3cenos", "description": "Somos una instituci\xF3n comprometida con la formaci\xF3n integral de nuestros estudiantes, basada en valores, vocaci\xF3n y excelencia educativa.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753161445/IMG_20250625_160321_i4vmzv.jpg" })} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
