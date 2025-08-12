import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_gtNXF9Rw.mjs';
import { manifest } from './manifest_CUEPmA0i.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/eventos.astro.mjs');
const _page2 = () => import('./pages/niveles/educacion-inicial.astro.mjs');
const _page3 = () => import('./pages/niveles/educacion-primaria.astro.mjs');
const _page4 = () => import('./pages/niveles.astro.mjs');
const _page5 = () => import('./pages/nosotros/formacion-integral.astro.mjs');
const _page6 = () => import('./pages/nosotros/historia.astro.mjs');
const _page7 = () => import('./pages/nosotros/infraestructura.astro.mjs');
const _page8 = () => import('./pages/nosotros/mensaje-de-autoridades.astro.mjs');
const _page9 = () => import('./pages/nosotros/quienes-somos.astro.mjs');
const _page10 = () => import('./pages/nosotros/servicios.astro.mjs');
const _page11 = () => import('./pages/nosotros.astro.mjs');
const _page12 = () => import('./pages/noticias.astro.mjs');
const _page13 = () => import('./pages/politicas-de-privacidad.astro.mjs');
const _page14 = () => import('./pages/reclamos/libro-reclamaciones.astro.mjs');
const _page15 = () => import('./pages/terminos-y-condiciones-de-uso.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/eventos.astro", _page1],
    ["src/pages/niveles/educacion-inicial.astro", _page2],
    ["src/pages/niveles/educacion-primaria.astro", _page3],
    ["src/pages/niveles.astro", _page4],
    ["src/pages/nosotros/formacion-integral.astro", _page5],
    ["src/pages/nosotros/historia.astro", _page6],
    ["src/pages/nosotros/infraestructura.astro", _page7],
    ["src/pages/nosotros/mensaje-de-autoridades.astro", _page8],
    ["src/pages/nosotros/quienes-somos.astro", _page9],
    ["src/pages/nosotros/servicios.astro", _page10],
    ["src/pages/nosotros.astro", _page11],
    ["src/pages/noticias.astro", _page12],
    ["src/pages/politicas-de-privacidad.astro", _page13],
    ["src/pages/reclamos/libro-reclamaciones.astro", _page14],
    ["src/pages/terminos-y-condiciones-de-uso.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "09dcfcfc-7f65-4764-a041-4bad2f327ca9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
