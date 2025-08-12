import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$HeroSection } from '../../chunks/HeroSection_BYm3Otf6.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                        */
import { $ as $$Location } from '../../chunks/Location_Bu54Wu1V.mjs';
export { renderers } from '../../renderers.mjs';

const tabs = [
  {
    id: "servicio1",
    label: "Aula de Innovación Pedagógica",
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158706/IMG_20250625_155404_vjv4rv.jpg",
    title: "Aula de Innovación Pedagógica",
    content: "Espacio equipado con computadoras y recursos tecnológicos donde los estudiantes desarrollan competencias digitales y refuerzan sus aprendizajes mediante el uso de las TIC. Aquí se fomenta la creatividad, el pensamiento crítico y el uso responsable de la tecnología, integrando lo digital al proceso educativo de manera activa e innovadora."
  },
  {
    id: "servicio2",
    label: "Servicio de Psicología",
    url: "https://www.redip.info/wp-content/uploads/2023/03/serezniy-112549419_s-675x450-1.jpg",
    title: "Servicio de Psicología",
    content: "Brinda apoyo emocional, orientación y acompañamiento a los estudiantes para promover su bienestar integral. Se realizan sesiones individuales, charlas grupales y actividades preventivas que fortalecen la convivencia, autoestima y salud mental dentro de la comunidad educativa."
  },
  {
    id: "servicio3",
    label: "Servicios Higiénicos",
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158920/IMG_20250625_162524_ordbyu.jpg",
    title: "Servicios Higiénicos",
    content: "La institución cuenta con servicios higiénicos limpios, seguros y diferenciados por niveles educativos y género, que garantizan condiciones adecuadas de higiene y salud para toda la comunidad escolar."
  },
  {
    id: "servicio4",
    label: "Patio Deportivo",
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753059084/servicioss_2_yu2gg3.jpg",
    title: "Patio Deportivo",
    content: "Espacio amplio y adecuado donde se realizan actividades deportivas como básquet, fútbol, vóley y sesiones de Educación Física. Cuenta con señalización para varios deportes y es fundamental para el desarrollo físico y recreativo de nuestros estudiantes."
  }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return /* @__PURE__ */ jsxs("section", { className: "w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", children: tabs.map(({ id, title, content, url }, index) => /* @__PURE__ */ jsxs(
      "article",
      {
        id,
        className: `tab-content ${index === activeTab ? "visible" : ""}`,
        children: [
          /* @__PURE__ */ jsx("figure", { className: "w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full object-cover aspect-video md:aspect-square lg:h-full lg:aspect-[16/7]",
              src: url,
              alt: title
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 pb-10 bg-89007 text-white h-[22rem] md:h-auto lg:h-auto", children: [
            /* @__PURE__ */ jsx("h2", { className: "uppercase font-bold mb-4 text-2xl md:text-2xl lg:text-3xl", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-justify text-base", children: content })
          ] })
        ]
      },
      id
    )) }),
    /* @__PURE__ */ jsx("ul", { className: "w-full shadow-2xl p-0 grid grid-cols-2 md:flex md:justify-center lg:flex lg:justify-center", children: tabs.map(({ id, label }, index) => /* @__PURE__ */ jsx(
      "li",
      {
        className: `tab-button ${index === activeTab ? "active" : ""}`,
        onClick: () => setActiveTab(index),
        children: label
      },
      id
    )) })
  ] });
};

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Servicios | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Nuestros Servicios", "description": "Brindamos servicios educativos y complementarios que fortalecen el aprendizaje, el bienestar y la formaci\xF3n integral de nuestros estudiantes, asegurando un entorno escolar de calidad y atenci\xF3n permanente.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753158678/IMG_20250625_155235_dgd0lw.jpg" })} ${renderComponent($$result2, "Tabs", Tabs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/about-us/Tabs", "client:component-export": "default" })} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/servicios.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/nosotros/servicios.astro";
const $$url = "/nosotros/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
