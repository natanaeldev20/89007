import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, a as renderTemplate } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SectionEventNews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionEventNews;
  const { background } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-4"${addAttribute(`background-color: ${background};`, "style")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/ui/SectionEventNews.astro", void 0);

export { $$SectionEventNews as $ };
