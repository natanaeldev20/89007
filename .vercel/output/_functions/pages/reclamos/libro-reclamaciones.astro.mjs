import { c as createComponent, f as renderHead, d as renderSlot, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                      */
/* empty css                                                  */
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../../chunks/Container_Dejq6jGm.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { S as Select, T as TextField } from '../../chunks/Select_VPf2e90R.mjs';
import 'react';
export { renderers } from '../../renderers.mjs';

const $$ComplaintsBookLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-yyci3zeb> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" href="/logo-89007-v2.png" type="image/x-icon"><title>Institución Educativa N.º 89007</title>${renderHead()}</head> <body data-astro-cid-yyci3zeb> <main data-astro-cid-yyci3zeb> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/layouts/ComplaintsBookLayout.astro", void 0);

const Date = ({ name, value }) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "date",
      className: "w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]",
      name,
      value
    }
  );
};

const TextArea = ({
  name,
  placeholder,
  rows,
  value,
  onChange,
  required
}) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      name,
      rows,
      placeholder,
      value,
      onChange,
      required,
      className: "w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]"
    }
  );
};

const ClaimsForm = () => {
  const claimTypes = [
    { value: "queja", text: "Queja" },
    { value: "reclamo", text: "Reclamo" }
  ];
  const reasons = [
    { value: "accidentes", text: "Accidentes" },
    { value: "trato_inadecuado", text: "Trato inadecuado del personal" },
    { value: "discriminacion", text: "Discriminación o maltrato" },
    { value: "demora_proceso", text: "Demora en la atención o trámites" },
    {
      value: "infraestructura",
      text: "Problemas con la infraestructura o servicios"
    },
    { value: "docente", text: "Desempeño inadecuado del docente" },
    { value: "materiales", text: "Falta de materiales educativos o recursos" },
    { value: "informacion_erronea", text: "Información inexacta o confusa" },
    {
      value: "evaluacion",
      text: "Inconformidad con evaluaciones o calificaciones"
    },
    {
      value: "bullying",
      text: "Falta de acción ante casos de bullying o violencia escolar"
    },
    {
      value: "alimentacion",
      text: "Problemas con el servicio de alimentación"
    },
    { value: "robo", text: "Robo" },
    { value: "matricula", text: "Matricula" },
    { value: "otros", text: "Otros" }
  ];
  const claimant = [
    { value: "estudiante", text: "Estudiante" },
    { value: "padre_madre", text: "Padre o madre de familia" },
    { value: "apoderado", text: "Apoderado" },
    { value: "visitante", text: "Usuario visitante" }
  ];
  const documentType = [
    { value: "dni", text: "DNI" },
    { value: "carnet", text: "Carnet de extranjería" },
    { value: "pasaporte", text: "Pasaporte" }
  ];
  const degrees = [
    { value: "3años", text: "3 años" },
    { value: "4años", text: "4 años" },
    { value: "5años", text: "5 años" },
    { value: "1primaria", text: "1° primaria" },
    { value: "2primaria", text: "2° primaria" },
    { value: "3primaria", text: "3° primaria" },
    { value: "4primaria", text: "4° primaria" },
    { value: "5primaria", text: "5° primaria" },
    { value: "6primaria", text: "6° primaria" }
  ];
  return /* @__PURE__ */ jsxs("form", { action: "", className: "flex flex-col text-base text-gray-800", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-89007 mb-4 text-xl md:text-2xl", children: "Datos Generales" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "tipo-reclamo", children: "Tipo de Reclamación" }),
          /* @__PURE__ */ jsx(
            Select,
            {
              name: "tipo-reclamo",
              disabledText: "-- Selecione un tipo --",
              options: claimTypes
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Motivo de Reclamación" }),
          /* @__PURE__ */ jsx(
            Select,
            {
              name: "motivo-reclamo",
              disabledText: "-- Seleccione un motivo --",
              options: reasons
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "reclamante", children: "Reclamante" }),
          /* @__PURE__ */ jsx(
            Select,
            {
              name: "reclamante",
              disabledText: "-- Seleccione el tipo de reclamante --",
              options: claimant
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-89007 mb-4 text-xl md:text-2xl", children: "Datos del Reclamante" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "tipo-documento", children: "Tipo de Documento" }),
          /* @__PURE__ */ jsx(
            Select,
            {
              name: "tipo-documento",
              disabledText: "-- Seleccione el tipo de documento --",
              options: documentType
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "numero-documento", children: "Número de Documento" }),
          /* @__PURE__ */ jsx(TextField, { type: "number", placeholder: "Escriba Nro. de documento" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "apellidos", children: "Apellidos" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              type: "text",
              placeholder: "Escriba apellidos del Reclamante"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "nombres", children: "Nombres" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              type: "text",
              placeholder: "Escriba nombres del Reclamante"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "domicilio", children: "Domicilio" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              type: "text",
              placeholder: "Escriba dirección del domicilio"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "telefono-celular", children: "Teléfono/Celular" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              type: "number",
              placeholder: "Escriba teléfono o celular del Reclamante"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(TextField, { type: "text", placeholder: "Escriba correo electrónico" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "nombre-estudiante", children: "Estudiante" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              type: "text",
              placeholder: "Escriba nombres del estudiante"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "grado", children: "Grado" }),
          /* @__PURE__ */ jsx(
            Select,
            {
              name: "grado",
              disabledText: "-- Seleccione un grado --",
              options: degrees
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "seccion", children: "Sección" }),
          /* @__PURE__ */ jsx(TextField, { type: "text", placeholder: "Escriba la sección" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-89007 mb-4 text-xl md:text-2xl", children: "Detalle del Reclamo" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fecha", children: "Fecha Evento" }),
            /* @__PURE__ */ jsx(Date, { name: "fecha", value: "fecha" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "monto", children: "Monto Reclamado" }),
            /* @__PURE__ */ jsx(TextField, { type: "number", placeholder: "Escriba monto" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "area-personal", children: "Área/Personal involucrado" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                type: "text",
                placeholder: "Escriba área o personal involucrado"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "detalle", children: "Detalle de lo ocurrido" }),
          /* @__PURE__ */ jsx(
            TextArea,
            {
              name: "detalle",
              placeholder: "Escriba breve resumen de lo ocurrido",
              rows: 5
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "pedido", children: "Pedido" }),
          /* @__PURE__ */ jsx(
            TextArea,
            {
              name: "pedido",
              placeholder: "Escriba breve resumen del pedido solicitado",
              rows: 5
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-start", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", required: true }),
      /* @__PURE__ */ jsxs("span", { children: [
        " ",
        "Declaro ser el títular del servicio y acepto el contenido del presente formulario manifestando bajo Declaración Jurada la veracidad de los hechos descritos."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
      /* @__PURE__ */ jsx("li", { children: "La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI." }),
      /* @__PURE__ */ jsx("li", { children: "El Proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles, el cual es improrrogable." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Al presentar su reclamo o queja, autoriza el tratamiento de sus datos personales conforme a nuestra",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/politicas-de-privacidad",
            className: "text-89007 font-medium",
            target: "_blank",
            children: "Política de Privacidad"
          }
        ),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("button", { className: "w-full p-4 bg-89007 rounded-lg text-white font-semibold cursor-pointer", children: "Enviar Reclamo" })
  ] });
};

const $$LibroReclamaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ComplaintsBookLayout", $$ComplaintsBookLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "background": "#039fcf" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> <header class="w-full flex flex-col items-center mb-8 justify-center"> <figure class="w-full mb-4 flex justify-center items-center"> <img class="w-full max-w-[6rem]" src="/logo-89007.png" alt=""> </figure> <h1 class="font-bold mb-3 text-yellow-400 text-2xl md:text-4xl">
Libro de Reclamaciones
</h1> <p class="text-base font-medium text-center text-white">
Mz. C Lte. VI de la Urb. 21 de Abril del distrito de Chimbote
</p> </header> <div class="bg-white shadow-xl rounded-xl p-6 md:p-12"> ${renderComponent($$result4, "ClaimsForm", ClaimsForm, {})} </div> </div> ` })} ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/reclamos/libro-reclamaciones.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/reclamos/libro-reclamaciones.astro";
const $$url = "/reclamos/libro-reclamaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LibroReclamaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
