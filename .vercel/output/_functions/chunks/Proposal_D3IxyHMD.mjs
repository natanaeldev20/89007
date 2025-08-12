import { c as createComponent, b as createAstro, m as maybeRenderHead, d as renderSlot, a as renderTemplate, e as addAttribute, r as renderComponent } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SectionContainer } from './SectionContainer_DdL3JlfF.mjs';
import { $ as $$Card } from './Card_CIfFQXYy.mjs';

const $$Astro$4 = createAstro();
const $$FormContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FormContainer;
  const { title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full pt-12 bg-89007 px-6 md:px-8 lg:px-8"> <div class="max-w-6xl m-auto gap-8 py-6 grid md:grid-cols-2 lg:grid-cols-2"> <div class="w-full flex flex-col items-center justify-center text-center gap-4 text-white"> <h2 class="font-bold text-3xl md:text-4xl lg:text-4xl"> ${title} </h2> <p class="text-base"> ${body} </p> </div> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/FormContainer.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProposedIntroduction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProposedIntroduction;
  const { title, body, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="grid m-auto max-w-lg md:m-0 md:grid-cols-2 md:w-full md:max-w-full lg:grid-cols-2 lg:max-w-full lg:w-full"> <figure class="w-full"> <img class="w-full h-full aspect-[16/12] object-cover"${addAttribute(url, "src")}${addAttribute(title, "alt")}> </figure> <div class="w-full p-6 flex flex-col items-center justify-center md:p-16 lg:p-16"> <div> <h2 class="font-normal mb-4 text-89007 text-center text-2xl md:text-3xl md:text-start lg:text-start lg:text-3xl">
Propuesta educativa <span class="font-bold">${title}</span> </h2> <p class="text-base"> ${body} </p> </div> </div> </div> </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/ProposedIntroduction.astro", void 0);

const $$Astro$2 = createAstro();
const $$EducationApproach = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EducationApproach;
  const { title, array } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "#e8e8e8" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-2xl text-center mb-12 md:text-3xl lg:text-3xl">
Enfoque de enseñanza en el <span class="font-bold text-89007">${title}</span> </h2> <div class="max-w-6xl m-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"> ${array.map(({ url, title: title2, content, color }) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "url": url, "title": title2, "content": content, "color": color })}`)} </div> ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/EducationApproach.astro", void 0);

const $$Astro$1 = createAstro();
const $$WhyChoose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyChoose;
  const { title, body } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "#039fcf" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl m-auto"> <h2 class="text-center text-white mb-6 text-2xl md:text-3xl lg:text-3xl">
¿Por qué elegir a la Institución Educativa N° 89007 como <span class="font-bold text-yellow-400">${title}</span> para tus hijos?
</h2> <p class="text-base text-white text-start md:text-center"> ${body} </p> </div> ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/WhyChoose.astro", void 0);

const $$Astro = createAstro();
const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proposal;
  const {
    title,
    body,
    url,
    orderTextMobile,
    orderTextDesktop,
    orderImageMobile,
    orderImageDesktop
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full flex gap-0 flex-col md:flex-col lg:gap-8 lg:flex-row"> <div${addAttribute(`w-full grid place-content-center ${orderTextMobile} ${orderTextDesktop}`, "class")}> <span class="block w-40 h-[10px] bg-89007"></span> <h3 class="text-2xl pt-4 mb-4 text-89007 md:text-3xl lg:text-3xl">
Aprendizaje <span class="font-bold">${title}</span> </h3> <p class="text-base mb-8"> ${body} </p> </div> <figure${addAttribute(`w-full ${orderImageMobile} ${orderImageDesktop}`, "class")}> <img class="w-full aspect-video object-cover shadow-xl rounded-lg"${addAttribute(url, "src")}${addAttribute(title, "alt")}> <figcaption class="sr-only">${title}</figcaption> </figure> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/levels/Proposal.astro", void 0);

export { $$Proposal as $, $$FormContainer as a, $$ProposedIntroduction as b, $$EducationApproach as c, $$WhyChoose as d };
