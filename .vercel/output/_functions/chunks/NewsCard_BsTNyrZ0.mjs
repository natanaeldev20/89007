import { jsxs, jsx } from 'react/jsx-runtime';

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

export { NewsCard as default };
