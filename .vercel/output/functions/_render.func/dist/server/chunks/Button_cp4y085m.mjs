import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, a as renderTemplate } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { url, bg, color, transform, weight, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`background-color: ${bg}; color: ${color}; text-transform: ${transform}; font-weight: ${weight}`, "style")} class="w-[max-content] p-4 pl-12 pr-12 text-base border-none flex items-center justify-center gap-2 outline-none rounded-[3rem] cursor-pointer shadow-xl">${text}${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
