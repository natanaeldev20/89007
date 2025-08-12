import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../../chunks/Container_Dejq6jGm.mjs';
import 'clsx';
import { $ as $$Location } from '../../chunks/Location_Bu54Wu1V.mjs';
import { $ as $$HeroSection } from '../../chunks/HeroSection_BYm3Otf6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Mission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="w-full grid gap-8 grid-cols-1 md:grid-cols-2"> <div class="w-full grid place-content-center"> <span class="block w-20 h-[10px] bg-89007"></span> <h2 class="text-2xl font-bold text-89007 py-4 md:text-3xl">Misión</h2> <p class="text-base">
"Somos la Institución Educativa No 89007 de Educación Básica donde los
      estudiantes construyen sus aprendizajes en base a la indagación y
      experimentación bajo el enfoque por competencias haciendo uso de las TIC
      para comprender y resolver las situaciones problemáticas con una sólida
      formación basada en la diversidad y la práctica de valores como la fe,
      disciplina y solidaridad, guiados por docentes innovadores que desarrollan
      capacidades en los estudiantes del nivel inicial y primaria, con el apoyo
      de los padres de familia y la dirección que lidera democráticamente
      buscando el bienestar de la comunidad educativa en un ambiente saludable,
      seguro y ecoeficiente."
</p> </div> <figure class="w-full"> <img class="w-full object-cover shadow-xl rounded-xl aspect-square sm:aspect-video md:aspect-square md:shadow-sm md:rounded-bl-[10rem] md:rounded-none" src="https://www.santanderopenacademy.com/es/blog/mision-vision-y-valores/_jcr_content/root/container/responsivegrid/image_688851163.coreimg.jpeg/1733908358345/vision-mision-y-valores-2.jpeg" alt="Misión de la Institución Educativa N.º 89007"> </figure> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/about-us/Mission.astro", void 0);

const $$Vision = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="w-full grid gap-8 grid-cols-1 md:grid-cols-2"> <figure class="w-full order-2 md:order-1"> <img class="w-full object-cover aspect-square shadow-xl rounded-xl md:aspect-square md:rounded-br-[10rem] md:rounded-none" src="https://www.mbaonline.es/images/easyblog_articles/7/b2ap3_large_vision-mision-valores-empresa.jpg" alt="Visión de la Institución Educativa N.º 89007"> </figure> <div class="w-full grid place-content-center order-1 md:order-2"> <span class="block w-20 h-[10px] bg-yellow-400"></span> <h2 class="text-2xl font-bold text-yellow-400 py-4 md:text-3xl">Visión</h2> <p class="text-base">
"Al 2022, la I.E. 89007 de la Urb. 21 de Abril, brindan servicio educativo
      de calidad, donde los estudiantes construyen sus aprendizajes en base a la
      indagación y experimentación bajo el enfoque por competencias haciendo uso
      de las TIC para comprender y resolver las situaciones problemáticas de su
      vida diaria. Cuenta con docentes innovadores y capacitados que atienden a
      la diversidad del aula y aplican la evaluación formativa para la toma de
      decisiones oportunas, padres de familia que coadyuvan con la educación de
      sus hijos e hijas, bajo un liderazgo pedagógico eficiente que busca el
      bienestar de la comunidad educativa en un clima de respeto y buen trato
      desarrollado en una institución segura, acogedora, saludable, y
      comprometida con el cuidado del ambiente."
</p> </div> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/about-us/Vision.astro", void 0);

const $$SchoolProfile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-base mb-8 text-justify">
Somos la Institución Educativa N.° 89007 de Chimbote, una escuela
      comprometida con la formación integral de niños y niñas en el nivel
      Primaria. Contamos con una sólida propuesta educativa centrada en valores,
      el desarrollo de habilidades sociales, emocionales y cognitivas, y el
      fortalecimiento del sentido de responsabilidad y pertenencia. A lo largo
      de los años, hemos contribuido con dedicación y vocación a la formación de
      generaciones preparadas para afrontar los desafíos de la sociedad actual,
      priorizando siempre una enseñanza inclusiva, participativa y de calidad,
      al servicio de nuestra comunidad.
</p> <div class="w-full grid gap-8 grid-cols-1"> ${renderComponent($$result3, "Mission", $$Mission, {})} ${renderComponent($$result3, "Vision", $$Vision, {})} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/about-us/SchoolProfile.astro", void 0);

const image = new Proxy({"src":"/_astro/nosotros.CNuLN44p.jpg","width":4000,"height":2256,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/hero/nosotros.jpg";
							}
							
							return target[name];
						}
					});

const $$QuienesSomos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Qui\xE9nes Somos | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "\xBFQui\xE9nes Somos?", "description": "Conoce la historia, misi\xF3n y valores que nos definen como una instituci\xF3n educativa comprometida con la formaci\xF3n integral de nuestros estudiantes.", "url": image.src })} ${renderComponent($$result2, "SchoolProfile", $$SchoolProfile, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/quienes-somos.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/quienes-somos.astro";
const $$url = "/nosotros/quienes-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuienesSomos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
