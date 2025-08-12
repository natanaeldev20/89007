import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_DdL3JlfF.mjs';
import 'clsx';
import { $ as $$Container } from '../chunks/Container_Dejq6jGm.mjs';
import { $ as $$Location } from '../chunks/Location_Bu54Wu1V.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_BYm3Otf6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LevelCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LevelCard;
  const { url, path, title, text, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full rounded-lg"> <figure class="w-full shadow-xl"> <img class="w-full aspect-[16/11] object-cover rounded-tl-xl rounded-tr-xl"${addAttribute(url, "src")}${addAttribute(title, "alt")}> <figcaption class="sr-only">${title}</figcaption> </figure> <div class="p-6 grid place-content-center rounded-bl-xl rounded-br-xl"${addAttribute(`background-color: ${color};`, "style")}> <a class="flex text-89007 items-center justify-center gap-3 bg-white text-base p-4 px-8 font-bold rounded-[3rem] shadow-xl"${addAttribute(path, "href")}>${text}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#039fcf" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"></path></svg></a> </div> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/levels/LevelCard.astro", void 0);

const $$LevelsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"> ${renderComponent($$result3, "LevelCard", $$LevelCard, { "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753204893/b8aaa606-fa7c-4fa7-8e15-04e16760615a_lqn8iw.png", "path": "/niveles/educacion-inicial", "title": "inicial", "text": "Educacion Inicial", "color": "#039fcf" })} ${renderComponent($$result3, "LevelCard", $$LevelCard, { "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753204908/d15ca93a-18f5-418f-96c5-cd6c127b44f9_xtmwyx.png", "path": "/niveles/educacion-primaria", "title": "primaria", "text": "Educacion Primaria", "color": "#039fcf" })} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/LevelsSection.astro", void 0);

const $$Niveles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Niveles | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Nuestros niveles educativos", "description": "Brindamos una formaci\xF3n s\xF3lida y progresiva, adaptada a cada etapa del desarrollo escolar de nuestros estudiantes.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753205084/092106c7-8951-4895-8259-1025e904be19_syqudd.png" })} ${renderComponent($$result2, "LevelsSection", $$LevelsSection, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/niveles.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/niveles.astro";
const $$url = "/niveles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Niveles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
