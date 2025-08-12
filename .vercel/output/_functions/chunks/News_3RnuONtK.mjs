import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_cp4y085m.mjs';
import { a as getNews3 } from './newsService_Ue2Yha1a.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { $ as $$SectionContainer } from './SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from './Container_Dejq6jGm.mjs';

const NewsCard = ({ url, title }) => {
  return /* @__PURE__ */ jsxs("article", { className: "w-full flex flex-col gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] rounded-xl", children: [
    /* @__PURE__ */ jsx("figure", { className: "w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full aspect-video object-cover rounded-t-xl shadow-xl",
        src: url,
        alt: title,
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx("h3", { className: "font-normal text-base", children: title }) })
  ] });
};

const prerender = true;
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const news = await getNews3();
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="block w-25 h-[10px] bg-89007"></span> <h2 class="uppercase text-89007 pt-4 font-bold color-89007 mb-8 text-2xl md:text-3xl lg:text-3xl">
Últimas noticiasj
</h2> <div class="w-full mb-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${news.map(({ title, imageUrl }) => renderTemplate`${renderComponent($$result3, "NewsCard", NewsCard, { "client:load": true, "title": title, "url": imageUrl, "client:component-hydration": "load", "client:component-path": "@components/home/NewsCard", "client:component-export": "default" })}`)} <!-- <NewsList client:load /> --> </div> <div class="w-full grid place-content-center"> ${renderComponent($$result3, "Button", $$Button, { "url": "noticias", "bg": "#ffc223", "color": "#000", "transform": "none", "weight": "600", "text": "Ver m\xE1s noticias" }, { "default": async ($$result4) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"><path><svg></svg> </path> </path> </svg>` })} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/News.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/News.astro";
const $$url = undefined;

export { $$News as default, $$file as file, prerender, $$url as url };
