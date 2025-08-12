import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CMCALBbW.mjs';
import { $ as $$Proposal, a as $$FormContainer, b as $$ProposedIntroduction, c as $$EducationApproach, d as $$WhyChoose } from '../../chunks/Proposal_D3IxyHMD.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { T as TextField, S as Select } from '../../chunks/Select_VPf2e90R.mjs';
import { T as TermsAndPrivacyAgreement, c as createPreRegistration } from '../../chunks/preRegistrationService_CZdBHXb8.mjs';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../../chunks/Container_Dejq6jGm.mjs';
import { $ as $$Location } from '../../chunks/Location_Bu54Wu1V.mjs';
export { renderers } from '../../renderers.mjs';

const InitialForm = () => {
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
        onSubmit: handleSubmit(onSubmit),
        ref: formRef,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full mb-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2", children: [
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
                  { value: "3 años", label: "3 años" },
                  { value: "4 años", label: "4 años" },
                  { value: "5 años", label: "5 años" }
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

const initialApproach = [
  {
    id: 1,
    url: "https://www.fodehum.com.ar/media/home/profesorado-nivel-inicial-2.jpg",
    title: "Juego como herramienta de aprendizaje",
    content: "En el nivel Inicial, el juego es el eje fundamental del aprendizaje. A través de actividades lúdicas, los niños exploran su entorno, desarrollan su creatividad, expresan emociones y adquieren conocimientos de manera natural y divertida.",
    color: "#4080d6"
  },
  {
    id: 2,
    url: "https://www.unidiversidad.com.ar/cache/esi-nivel-inicial-portada_1000_1100.jpg",
    title: "Desarrollo de la autonomía",
    content: "Se promueve que los niños realicen pequeñas tareas por sí mismos, fortaleciendo su independencia, confianza y responsabilidad. Cada actividad está diseñada para que aprendan a tomar decisiones y resolver situaciones cotidianas.",
    color: "#49c289"
  },
  {
    id: 3,
    url: "https://www.tuproyectodevida.pe/wp-content/uploads/2023/02/de-que-trata-educacion-inicial-1200x628.jpg",
    title: "Estimulación temprana y habilidades cognitivas",
    content: "Mediante juegos sensoriales, canciones, cuentos y dinámicas interactivas, se potencia el lenguaje, la atención, la memoria y el pensamiento lógico, sentando las bases del aprendizaje futuro.",
    color: "#7353c6"
  },
  {
    id: 4,
    url: "https://grupogeard.com/pe/wp-content/uploads/sites/4/2022/05/pexels-yan-krukov-8612922.jpg",
    title: "Formación en valores y convivencia",
    content: "Desde temprana edad, se enseñan valores como el respeto, la solidaridad, la empatía y la responsabilidad, favoreciendo una sana convivencia entre los niños y fortaleciendo su desarrollo emocional y social.",
    color: "#ff8b49"
  },
  {
    id: 5,
    url: "https://home.worldvisionamericalatina.org/wp-content/uploads/2023/06/Educacion-inicial-banner.jpg",
    title: "Participación activa de las familias",
    content: "El trabajo conjunto entre la institución y la familia es esencial. Se promueve la participación de los padres en actividades escolares, fortaleciendo el vínculo entre el hogar y la escuela.",
    color: "#417cd5"
  },
  {
    id: 6,
    url: "https://educacion.editorialaces.com/wp-content/uploads/2018/03/Materiales-para-capacitacion-Serie-Nivel-Inicial.jpg",
    title: "Ambiente seguro y acogedor",
    content: "Se garantiza un entorno cálido, seguro y adaptado a las necesidades de los más pequeños, en el que puedan explorar, aprender y crecer con alegría y confianza.",
    color: "#6b4348"
  }
];

const $$InitialEducationalProposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Proposal", $$Proposal, { "title": "centrado en el estudiante", "body": "En la Instituci\xF3n Educativa N.\xBA 89007, cada estudiante es el protagonista de su proceso de aprendizaje. Todas nuestras actividades est\xE1n pensadas para que los ni\xF1os exploren, investiguen y desarrollen su creatividad, siempre guiados por sus docentes. De esta manera, fortalecemos tanto su desarrollo emocional como su integraci\xF3n social.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753206328/10d6a0d4-85fe-485f-98da-f58d4f540d8b_l4yznl.png", "orderTextDesktop": "sm:order-1", "orderImageDesktop": "sm:order-2", "orderTextMobile": "order-1", "orderImageMobile": "order-2" })} ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/levels/InitialEducationalProposal.astro", void 0);

const $$EducacionInicial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Educaci\xF3n Inicial | Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContainer", $$FormContainer, { "title": "Educaci\xF3n en Inicial", "body": "Aplicamos una metodolog\xEDa dise\xF1ada especialmente para ni\xF1os de educaci\xF3n Inicial, enfocada en despertar su inter\xE9s por descubrir, fortalecer su autonom\xEDa y fomentar la creatividad mediante actividades tanto individuales como en grupo." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "InitialForm", InitialForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/levels/InitialForm", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "ProposedIntroduction", $$ProposedIntroduction, { "title": "en Inicial", "body": "Aplicamos una metodolog\xEDa dise\xF1ada especialmente para ni\xF1os de educaci\xF3n Inicial, enfocada en despertar su inter\xE9s por descubrir, fortalecer su autonom\xEDa y fomentar la creatividad mediante actividades tanto individuales como en grupo.", "url": "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,w_800/v1753206331/12e0f04f-6685-4668-9237-d9239ec4e65d_hfp6ds.png" })} ${renderComponent($$result2, "EducationApproach", $$EducationApproach, { "title": "nivel Inicial", "array": initialApproach })} ${renderComponent($$result2, "WhyChoose", $$WhyChoose, { "title": "colegio de Inicial", "body": "En la Instituci\xF3n Educativa N.\xBA 89007 brindamos una formaci\xF3n temprana enfocada en el desarrollo de la autonom\xEDa infantil, promoviendo el aprendizaje a partir de experiencias significativas y est\xEDmulos del entorno. Adem\xE1s, fomentamos el trabajo en equipo desde el nivel Inicial, con el objetivo de fortalecer la confianza de nuestros ni\xF1os, su capacidad para relacionarse con los dem\xE1s y enfrentar con seguridad los nuevos retos que les presenta su entorno." })} ${renderComponent($$result2, "InitialEducationalProposal", $$InitialEducationalProposal, {})} ${renderComponent($$result2, "Location", $$Location, {})} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/niveles/educacion-inicial.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/niveles/educacion-inicial.astro";
const $$url = "/niveles/educacion-inicial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EducacionInicial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
