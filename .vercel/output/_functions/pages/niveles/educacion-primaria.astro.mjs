import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$Proposal, a as $$FormContainer, b as $$ProposedIntroduction, c as $$EducationApproach, d as $$WhyChoose } from '../../chunks/Proposal_D3IxyHMD.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../../chunks/Container_Dejq6jGm.mjs';
import { $ as $$Location } from '../../chunks/Location_Bu54Wu1V.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { T as TextField, S as Select } from '../../chunks/Select_VPf2e90R.mjs';
import { T as TermsAndPrivacyAgreement, c as createPreRegistration } from '../../chunks/preRegistrationService_CZdBHXb8.mjs';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from 'react-icons/ai';
export { renderers } from '../../renderers.mjs';

const $$PrimaryEducationalProposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<header class="w-full"> <h2 class="text-2xl mb-12 text-center text-89007 md:text-3xl lg:text-3xl">
Propuesta educativa en el <span class="font-bold">nivel Primaria</span> </h2> </header> <div class="grid grid-cols-1 gap-12"> ${renderComponent($$result3, "Proposal", $$Proposal, { "title": "centrado en el estudiante", "body": "En la Instituci\xF3n Educativa N.\xBA 89007 impulsamos un enfoque centrado en el estudiante, donde cada ni\xF1o es protagonista de su aprendizaje. Fomentamos la autonom\xEDa, el pensamiento cr\xEDtico y la participaci\xF3n activa mediante estrategias adaptadas a sus necesidades, actividades din\xE1micas y el acompa\xF1amiento docente, fortaleciendo as\xED sus habilidades y su confianza.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753204908/d15ca93a-18f5-418f-96c5-cd6c127b44f9_xtmwyx.png", "orderTextDesktop": "lg:order-1", "orderImageDesktop": "lg:order-2", "orderTextMobile": "order-1", "orderImageMobile": "order-2" })} ${renderComponent($$result3, "Proposal", $$Proposal, { "title": "Grupal", "body": "En la Instituci\xF3n Educativa N.\xBA 89007 promovemos el aprendizaje grupal para fortalecer la colaboraci\xF3n, el respeto y la comunicaci\xF3n. A trav\xE9s del trabajo en equipo, los estudiantes desarrollan habilidades sociales, asumen responsabilidades y construyen conocimiento de forma conjunta, reforzando el sentido de pertenencia.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753160143/IMG_20250710_162742_jvz5sh.jpg", "orderTextDesktop": "lg:order-2", "orderImageDesktop": "lg:order-1", "orderTextMobile": "order-1", "orderImageMobile": "order-2" })} ${renderComponent($$result3, "Proposal", $$Proposal, { "title": "Individual", "body": "En la Instituci\xF3n Educativa N.\xBA 89007 valoramos el aprendizaje individual, permitiendo que cada estudiante avance a su ritmo, desarrolle autonom\xEDa y fortalezca su pensamiento cr\xEDtico mediante actividades personalizadas y acompa\xF1amiento docente.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753161451/IMG_20250710_173846_xwsaz1.jpg", "orderTextDesktop": "lg:order-1", "orderImageDesktop": "lg:order-2", "orderTextMobile": "order-1", "orderImageMobile": "order-2" })} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/PrimaryEducationalProposal.astro", void 0);

const PrimaryForm = () => {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await createPreRegistration(data);
      if (res.status === 201 || res.status === 200) {
        modalRef.current?.showModal();
        formRef.current?.reset();
      }
    } catch (error) {
      const axiosError = error;
      axiosError.response?.data?.error;
    } finally {
      setLoading(false);
    }
  };
  const handleBackdrop = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current?.close();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "dialog",
      {
        ref: modalRef,
        className: "m-auto rounded-xl p-6 w-80 max-w-full border-none shadow-lg backdrop:bg-[#0009]",
        onClick: handleBackdrop,
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
          /* @__PURE__ */ jsx(AiOutlineCheckCircle, { className: "text-89007", size: 60 }),
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold text-center", children: "¡Registro exitoso!" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 text-sm", children: "Tus datos han sido enviados correctamente. Nos pondremos en contacto contigo pronto." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "mt-4 px-4 py-2 rounded-md bg-89007 text-white",
              onClick: () => modalRef.current?.close(),
              children: "Cerrar"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "w-full bg-white p-8 rounded-lg shadow-2xl",
        ref: formRef,
        onSubmit: handleSubmit(onSubmit),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full grid mb-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2", children: [
            /* @__PURE__ */ jsx(
              TextField,
              {
                placeholder: "NOMBRES",
                type: "text",
                register: register("name", {
                  required: {
                    value: true,
                    message: "El nombre es requerido"
                  }
                }),
                error: errors.name
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                placeholder: "APELLIDOS",
                type: "text",
                register: register("lastName", {
                  required: {
                    value: true,
                    message: "El apellido es requerido"
                  }
                }),
                error: errors.lastName
              }
            ),
            /* @__PURE__ */ jsx(
              Select,
              {
                label: "Tipo de documento:",
                register: register("documentType", {
                  required: {
                    value: true,
                    message: "El tipo de documento es requerido"
                  }
                }),
                error: errors.documentType,
                options: [
                  { value: "dni", label: "DNI" },
                  { value: "carne", label: "Carne de extranjeria" },
                  { value: "pasaporte", label: "Pasaporte" }
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                placeholder: "NÚMERO DE DOCUMENTO",
                type: "number",
                register: register("documentNumber", {
                  required: {
                    value: true,
                    message: "El numero de documento es requerido"
                  }
                }),
                error: errors.documentNumber
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                placeholder: "CORREO ELECTRÓNICO",
                type: "email",
                register: register("email", {
                  required: {
                    value: true,
                    message: "El correo electronico es requerido"
                  }
                }),
                error: errors.email
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                placeholder: "NÚMERO DE TELÉFONO CELULAR",
                type: "number",
                register: register("phone", {
                  required: {
                    value: true,
                    message: "El numero es requerido"
                  }
                }),
                error: errors.phone
              }
            ),
            /* @__PURE__ */ jsx(
              Select,
              {
                label: "Grado:",
                register: register("degree", {
                  required: {
                    value: true,
                    message: "El grado es requerido"
                  }
                }),
                error: errors.degree,
                options: [
                  { value: "1 primaria", label: "1° primaria" },
                  { value: "2 primaria", label: "2° primaria" },
                  { value: "3 primaria", label: "3° primaria" },
                  { value: "4 primaria", label: "4° primaria" },
                  { value: "5 primaria", label: "5° primaria" },
                  { value: "6 primaria", label: "6° primaria" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(TermsAndPrivacyAgreement, {}),
          /* @__PURE__ */ jsx("button", { className: "w-full bg-89007 text-white cursor-pointer p-4 text-lg font-bold rounded-lg shadow-xl", children: loading ? "Enviando datos..." : "Enviar datos" })
        ]
      }
    )
  ] });
};

const primaryFocus = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753205691/90e4ecee-21b7-421b-955a-3955137aea7c_idfidp.png",
    title: "Desarrollo de competencias",
    content: "Promovemos un aprendizaje basado en competencias, donde los estudiantes construyen conocimientos, desarrollan habilidades y actitudes que les permiten desenvolverse en distintos contextos de manera crítica, creativa y responsable.",
    color: "#739a52"
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753205827/2fd100ff-fcb2-4fcb-8ad4-ccadaf709f37_rctqwc.png",
    title: "Educación centrada en el estudiante",
    content: "El estudiante es el protagonista de su aprendizaje. Se fomenta su participación activa, la reflexión, la investigación y la toma de decisiones para fortalecer su autonomía y autoestima.",
    color: "#dfa66e"
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753205959/13f29805-5149-4514-a442-ca44669f2e8a_lf2gga.png",
    title: "Aprendizaje significativo",
    content: "Se parte de los saberes previos, intereses y contextos de los estudiantes para construir nuevos conocimientos que tengan sentido para su vida cotidiana y su comunidad.",
    color: "#ffde75"
  },
  {
    id: 4,
    url: "https://neuro-class.com/wp-content/uploads/2021/08/Portada-Inclusion-educativa-NeuroClass.jpg",
    title: "Diversidad e inclusión",
    content: "Respetamos y valoramos la diversidad cultural, lingüística y social de nuestros estudiantes, adaptando nuestras estrategias pedagógicas para atender a todas y todos por igual.",
    color: "#f15a23"
  },
  {
    id: 5,
    url: "https://i.ytimg.com/vi/J0g1Y-L_r-s/maxresdefault.jpg",
    title: "Evaluación formativa",
    content: "La evaluación es continua, reflexiva y orientada a mejorar el aprendizaje. Se brindan retroalimentaciones que ayudan al estudiante a reconocer sus avances y áreas por fortalecer.",
    color: "#234696"
  },
  {
    id: 6,
    url: "https://www.afoe.org/wp-content/uploads/2023/09/aprendizaje-cooperativo-afoe.jpg",
    title: "Trabajo colaborativo",
    content: "Se promueve el trabajo en equipo, la empatía y la cooperación entre estudiantes como una estrategia para el desarrollo de habilidades sociales y cognitivas.",
    color: "#7f8ea5"
  },
  {
    id: 7,
    url: "https://portal.andina.pe/EDPfotografia/Thumbnail/2014/08/01/000256316W.jpg",
    title: "Educación con enfoque intercultural",
    content: "La evaluación es continua, reflexiva y orientada a mejorar el aprendizaje. Se brindan retroalimentaciones que ayudan al estudiante a reconocer sus avances y áreas por fortalecer.",
    color: "#ff6b83"
  }
];

const $$EducacionPrimaria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Educaci\xF3n Primaria | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContainer", $$FormContainer, { "title": "Educaci\xF3n en Primaria", "body": "Desarrollamos una metodolog\xEDa de ense\xF1anza primaria capaz de bridarle a los estudiantes herramientas para generar un aprendizaje aut\xF3nomo." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PrimaryForm", PrimaryForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/levels/PrimaryForm", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "ProposedIntroduction", $$ProposedIntroduction, { "title": "en Primaria", "body": "Nuestra propuesta educativa ha sido dise\xF1ada para preparar a nuestros estudiantes de primaria a enfrentar los retos del futuro con un m\xE9todo de ense\xF1anza innovador, infraestructura moderna y una formaci\xF3n de l\xEDderes en valores.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753159253/IMG_20250710_155414_yykooh.jpg" })} ${renderComponent($$result2, "EducationApproach", $$EducationApproach, { "title": "nivel Primaria", "array": primaryFocus })} ${renderComponent($$result2, "WhyChoose", $$WhyChoose, { "title": "colegio de Primaria", "body": "En la Instituci\xF3n Educativa N.\xB0 89007, promovemos una formaci\xF3n integral en el nivel Primaria, fomentando el trabajo colaborativo y el pensamiento cr\xEDtico. Nuestra propuesta pedag\xF3gica brinda herramientas pr\xE1cticas y estrategias innovadoras que permiten a los estudiantes enfrentar con \xE9xito los retos de su aprendizaje diario." })} ${renderComponent($$result2, "PrimaryEducationalProposal", $$PrimaryEducationalProposal, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/niveles/educacion-primaria.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/niveles/educacion-primaria.astro";
const $$url = "/niveles/educacion-primaria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EducacionPrimaria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
