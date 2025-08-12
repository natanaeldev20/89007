import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { title, description, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-12 px-6 bg-89007 md:py-16"> <div class="max-w-7xl m-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"> <div class="w-full grid place-content-center order-2 md:order-1"> <div> <h1 class="text-4xl font-bold text-white mb-4 text-center md:text-start lg:text-5xl"> ${title} </h1> <p class="text-white text-base text-center mb-4 md:mb-0c md:text-start"> ${description} </p> </div> </div> <figure class="w-full grid place-content-center order-1 md:order-2"> <img class="w-full rounded-lg aspect-video object-cover shadow-xl"${addAttribute(url, "src")}${addAttribute(title, "alt")} loading="lazy"> </figure> </div> </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/ui/HeroSection.astro", void 0);

export { $$HeroSection as $ };
