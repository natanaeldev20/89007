import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMCALBbW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { PiSealCheckFill } from 'react-icons/pi';
import { $ as $$HeroSection } from '../chunks/HeroSection_BYm3Otf6.mjs';
import { $ as $$SectionEventNews } from '../chunks/SectionEventNews_BNEk339w.mjs';
import { g as getNews } from '../chunks/newsService_Ue2Yha1a.mjs';
export { renderers } from '../renderers.mjs';

const NewsCard = ({ title, description, publicationDate, url }) => {
  return /* @__PURE__ */ jsxs("article", { className: "w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] sm:rounded-xl", children: [
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
        /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-base flex flex-row items-center gap-1", children: [
          "Institución Educativa N.º 89007",
          /* @__PURE__ */ jsx(PiSealCheckFill, { color: "#0866ff", width: 16, height: 16 })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm font-semibold", children: [
          "Publicado el",
          " ",
          new Date(publicationDate).toLocaleDateString("es-PE", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { src: url, alt: title, className: "w-full" }),
    /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#039fcf] mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: description })
    ] })
  ] });
};

const $$Noticias = createComponent(async ($$result, $$props, $$slots) => {
  const news = await getNews();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Noticias | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "\xDAltimas Noticias", "description": "Ent\xE9rate de las actividades, logros y novedades m\xE1s recientes de nuestra comunidad educativa.", "url": "https://static.wixstatic.com/media/11062b_55fa5302c58f4cebb599f8aa3c7e1b32~mv2.jpeg/v1/fill/w_640,h_554,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_55fa5302c58f4cebb599f8aa3c7e1b32~mv2.jpeg" })} ${renderComponent($$result2, "SectionEventNews", $$SectionEventNews, { "background": "#f2f4f7" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="w-full m-auto py-4 grid grid-cols-1 gap-4 sm:max-w-xl"> ${news.map(({ title, content, imageUrl, publishedAt }) => renderTemplate`${renderComponent($$result3, "NewsCard", NewsCard, { "client:load": true, "title": title, "description": content, "url": imageUrl, "publicationDate": publishedAt, "client:component-hydration": "load", "client:component-path": "@components/news/NewsCard", "client:component-export": "default" })}`)} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/noticias.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/noticias.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Noticias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
