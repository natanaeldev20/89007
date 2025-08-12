import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, content, url, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full h-full flex flex-col rounded-2xl shadow-xl"> <figure class="w-full"> <img class="w-full aspect-video object-cover rounded-t-2xl shadow-2xs"${addAttribute(url, "src")}${addAttribute(title, "alt")}> <figcaption class="sr-only">${title}</figcaption> </figure> <div class="w-full p-6 text-white flex flex-col gap-4 rounded-b-2xl flex-1"${addAttribute(`background-color: ${color}`, "style")}> <h3 class="font-semibold text-xl md:text-2xl lg:text-2xl">${title}</h3> <p class="text-base">${content}</p> </div> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
