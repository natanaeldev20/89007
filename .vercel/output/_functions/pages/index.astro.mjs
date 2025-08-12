import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, e as addAttribute } from '../chunks/astro/server_muSZyNsG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CMCALBbW.mjs';
import '../chunks/index_CVC0tT_4.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_FlPo-_l3.mjs';
import { $ as $$Button } from '../chunks/Button_cp4y085m.mjs';
import { a as getNews3 } from '../chunks/newsService_Ue2Yha1a.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_DdL3JlfF.mjs';
import { $ as $$Container } from '../chunks/Container_Dejq6jGm.mjs';
import { IoClose } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { T as TextField, S as Select } from '../chunks/Select_VPf2e90R.mjs';
import { T as TermsAndPrivacyAgreement, c as createPreRegistration } from '../chunks/preRegistrationService_CZdBHXb8.mjs';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from 'react-icons/ai';
export { renderers } from '../renderers.mjs';

const hero = new Proxy({"src":"/_astro/logo-89007.2W2CNV55.png","width":435,"height":574,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/logo/logo-89007.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-89007"> <div class="max-w-xl m-auto lg:grid lg:grid-cols-2 gap-4 lg:max-w-7xl"> <article class="w-full flex justify-center flex-col gap-4 p-8 items-center md:items-start lg:items-start lg:pt-16 lg:pb-16"> <p class="leading-[1.6] text-center text-white mb-8 text-2xl md:text-left md:text-3xl lg:text-[2em] lg:text-left">
En la <span class="font-bold">Institución Educativa N° 89007</span>, tu
        hijo desarrolla las <span class="font-extrabold">herramientas</span> para
<span class="font-bold">transformar su mundo</span> </p> <a href="#formulario" class="bg-white shadow-xl p-4 px-6 text-lg font-bold rounded-4xl w-max text-[#0069aa] md:text-xl lg:text-xl">
Solicita información
</a> </article> <figure class="grid p-8 items-center place-content-center"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full max-w-[10rem] sm:max-w-[13rem]", "src": hero, "alt": "Estudiantes del colegio 89007", "loading": "eager", "format": "webp", "loading": "eager" })} </figure> </div> </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/Hero.astro", void 0);

const director = new Proxy({"src":"/_astro/director.Dm4yIIOW.jpg","width":9000,"height":12000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/authorities/director.jpg";
							}
							
							return target[name];
						}
					});

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white mb-12 md:h-auto"> <div class="w-full grid grid-cols-1 md:grid-cols-2"> <div class="grid place-content-center px-6 py-12 md:p-12 md:py-50"> <span class="block w-40 h-[10px] bg-89007"></span> <h1 class="py-4 font-bold uppercase text-89007 text-2xl md:text-3xl"> <span>Bienvenidos a la</span> Institución Educativa N° 89007
</h1> <p class="text-base mb-4">
"Es un honor darles la bienvenida a la Institución Educativa N.° 89007,
        un lugar donde cada niño y niña inicia un camino de aprendizajes,
        valores y sueños. Juntos, construimos un futuro lleno de posibilidades."
</p> <p class="text-sm italic text-gray-600 font-medium">
— Prof. Juan Pérez, Director
</p> </div> <figure class="w-full md:h-full"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-cover shadow-xs aspect-square md:aspect-square md:rounded-bl-[16rem] md:h-full", "alt": "Director", "src": director, "width": 600, "format": "webp", "loading": "lazy", "sizes": "(max-width: 768px) 100vw, 50vw" })} </figure> </div> </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/Welcome.astro", void 0);

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

const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const news = await getNews3();
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="block w-25 h-[10px] bg-89007"></span> <h2 class="uppercase text-89007 pt-4 font-bold color-89007 mb-8 text-2xl md:text-3xl lg:text-3xl">
Últimas noticias
</h2> <div class="w-full mb-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${news.map(({ title, imageUrl }) => renderTemplate`${renderComponent($$result3, "NewsCard", NewsCard, { "client:load": true, "title": title, "url": imageUrl, "client:component-hydration": "load", "client:component-path": "@components/home/NewsCard", "client:component-export": "default" })}`)} </div> <div class="w-full grid place-content-center"> ${renderComponent($$result3, "Button", $$Button, { "url": "noticias", "bg": "#ffc223", "color": "#000", "transform": "none", "weight": "600", "text": "Ver m\xE1s noticias" }, { "default": async ($$result4) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"><path><svg></svg> </path> </path> </svg>` })} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/News.astro", void 0);

const benefits = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,c_limit,w_800/v1753056773/image-1_p99cmq.jpg",
    title: "Educación con valores",
    description: "Formamos estudiantes íntegros promoviendo respeto, responsabilidad y compromiso.",
    route: "/nosotros/formacion-integral",
    color: "#dc2618"
  },
  {
    id: 2,
    url: "https://lazosdelagente.com/wp-content/uploads/2019/05/shutterstock_375846688.png",
    // Considera subirla a Cloudinary
    title: "Profesores capacitados",
    description: "Nuestro equipo docente se capacita constantemente para brindar una educación de calidad.",
    route: "#",
    color: "#8cc63f"
  },
  {
    id: 3,
    url: "https://www.rededuca.net/sites/default/files/2024-05/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2815%29.jpg",
    // También considera subirla
    title: "Apoyo psicopedagógico",
    description: "Acompañamos el desarrollo emocional y cognitivo de nuestros estudiantes.",
    route: "#",
    color: "#039fcf"
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dezz9ntar/image/upload/f_auto,q_auto,c_limit,w_800/v1753057229/infraestructura_hsladx.jpg",
    title: "Infraestructura adecuada",
    description: "Contamos con espacios seguros y adecuados para el aprendizaje activo.",
    route: "/nosotros/infraestructura",
    color: "#f9de11"
  }
];

const $$Astro$2 = createAstro();
const $$BenefitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BenefitCard;
  const { url, title, description, route, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="shadow-xl rounded-2xl"${addAttribute(`background-color: ${color};`, "style")}> <figure class="w-full"> <img class="w-full aspect-video object-cover rounded-t-2xl"${addAttribute(url, "src")}${addAttribute(title, "alt")} loading="lazy"> </figure> <div class="w-full p-8 text-white"> <h3 class="text-xl font-semibold mb-4 md:text-2xl">${title}</h3> <p class="text-base mb-8">${description}</p> ${renderComponent($$result, "Button", $$Button, { "url": route, "bg": "#fff", "color": "#000", "transform": "none", "weight": "600", "text": "Conoce m\xE1s" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"><path><svg></svg> </path> </path> </svg>` })} </div> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/home/BenefitCard.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="mb-8 text-xl text-center md:text-2xl md:text-start">
Formando estudiantes con <span class="text-89007 font-bold">corazón y excelencia</span> </h2> <div class="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"> ${benefits.map(({ url, title, description, route, color }) => renderTemplate`${renderComponent($$result3, "BenefitCard", $$BenefitCard, { "url": url, "title": title, "description": description, "route": route, "color": color })}`)} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/Benefits.astro", void 0);

const ExperienceCard = ({ url, alt, name, role, color, content }) => {
  const modalRef = useRef(null);
  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
  };
  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      document.body.style.overflow = "auto";
    }
  };
  const handleBackdropClose = (e) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "dialog",
      {
        className: "m-auto max-w-[55rem] bg-transparent outline-none border-none backdrop:bg-[#000000c8]",
        ref: modalRef,
        onClick: handleBackdropClose,
        children: /* @__PURE__ */ jsx("div", { className: "px-4 bg-transparent sm:px-6 md:px-8", children: /* @__PURE__ */ jsxs("article", { className: "w-full bg-white relative rounded-2xl grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]", children: [
          /* @__PURE__ */ jsx("figure", { className: "w-full bg-amber-300 flex justify-end flex-col items-center px-4 pt-4 rounded-tr-2xl rounded-tl-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-2xl shadow-xl", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full max-w-[10rem] md:max-w-[18rem] lg:max-w-[18rem]",
              src: url,
              alt
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 text-base text-[#6c83ab] md:p-8 md:pr-15", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base mb-4", children: content }),
            /* @__PURE__ */ jsxs("p", { className: "text-base font-medium capitalize text-89007", children: [
              "Estudiante, ",
              name
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute bg-89007 top-2 right-2 transition-all duration-300 rounded-full cursor-pointer shadow-2xl p-1 text-white md:bg-transparent md:text-89007",
              onClick: handleCloseModal,
              children: /* @__PURE__ */ jsx(IoClose, { size: 35 })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "w-full relative shadow-xl rounded-2xl", children: [
      /* @__PURE__ */ jsxs("figure", { className: "w-full pt-8 pl-8 pr-8 flex items-center justify-center bg-amber-300 bg-center bg-auto rounded-tl-2xl rounded-tr-2xl", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: url,
            alt,
            className: "w-full max-w-[10rem] aspect-[9/16] object-cover md:w-full md:max-w-[13rem] lg:w-full"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.2]",
            onClick: handleOpenModal,
            children: /* @__PURE__ */ jsx(FaEye, { size: 80, color: "#ffffffe2" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full p-4 rounded-bl-2xl rounded-br-2xl",
          style: { backgroundColor: `${color}` },
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl capitalize font-semibold text-white text-center mb-1", children: name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase text-white text-center", children: role })
          ]
        }
      )
    ] })
  ] });
};

const student = new Proxy({"src":"/_astro/student.Cl4IQQdE.png","width":687,"height":916,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/experiences/student.png";
							}
							
							return target[name];
						}
					});

const student2 = new Proxy({"src":"/_astro/student-2.CU05frdI.png","width":622,"height":958,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/experiences/student-2.png";
							}
							
							return target[name];
						}
					});

const student3 = new Proxy({"src":"/_astro/student-3.CZMfNC-i.png","width":772,"height":1062,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/experiences/student-3.png";
							}
							
							return target[name];
						}
					});

const experiences = [
  {
    id: 1,
    videoUrl: "ope.mp4",
    url: student,
    alt: "estudiante del colegio 89007",
    name: "angelina paredes",
    role: "alumna",
    color: "#039fcf",
    content: "“Mi experiencia en el colegio ha sido muy buena, porque he aprendido a trabajar en equipo. Me encanta que sea un cole inclusivo, me gusta mucho que desde pequeños crezcamos en la realidad de nuestro mundo actual, en donde cada familia es diferente pero igual al mismo tiempo. Su educación en valores los buenos profesores y el trato que recibimos.”"
  },
  {
    id: 2,
    videoUrl: "ope.mp4",
    url: student2,
    alt: "estudiante del colegio 89007",
    name: "Luna Quiroz Oroya",
    role: "alumna",
    color: "#039fcf",
    content: "“Me gusta ir al colegio porque todos me conocen, las profesoras me quieren, enseñan y ayudan mucho, tambien tengo buenos amigos con quienes me divierto. Me agrada conocer cosas nuevas, es muy interesante todo, aun así, me encanta lo que tiene mi propio colegio, es como si fuera un sueño hecho realidad. Amo mi colegio, gracias por exitir Ancila Dei”"
  },
  {
    id: 3,
    videoUrl: "ope.mp4",
    url: student3,
    alt: "estudiante del colegio 89007",
    name: "rosita vasquez",
    role: "alumna",
    color: "#039fcf",
    content: "“Me siento muy agradecido con cada personaldel colegio, con mi tutora Miss Elizabeth, con mi directora y tambíen con los demas profesores que estuvieron en esta etapa de mi vida, hoy no soy el mismo alumno de antes, me acuerdo de muchas cosas buenas y malas..., mis travesuras. Estoy agradecido por la paciencia que me tuvieron, porque me hicieron cambiar.”"
  }
];

const $$Experiences = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="uppercase text-center text-89007 mb-2 text-lg md:text-xl lg:text-2xl">
Nuestros alumnos
</h2> <h2 class="uppercase text-center font-bold text-89007 mb-8 text-2xl md:text-3xl lg:text-4xl">
NOS CUENTAN SUS EXPERIENCIAS
</h2> <div class="w-full grid gap-4 mb-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3"> ${experiences.map(({ url, alt, name, role, color, content }) => renderTemplate`${renderComponent($$result3, "ExperienceCard", ExperienceCard, { "client:visible": true, "url": url.src, "name": name, "alt": alt, "role": role, "color": color, "content": content, "client:component-hydration": "visible", "client:component-path": "@components/home/ExperienceCard", "client:component-export": "default" })}`)} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/Experiences.astro", void 0);

const $$Astro$1 = createAstro();
const $$MethodologyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MethodologyCard;
  const { path, url, title, color, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full flex flex-col gap-8"> <figure class="w-full"> <img class="w-full aspect-[16/12] object-cover rounded-2xl shadow-xl"${addAttribute(url, "src")}${addAttribute(title, "alt")}> <figcaption class="sr-only">${title}</figcaption> </figure> <div class="w-full grid place-content-center"> ${renderComponent($$result, "Button", $$Button, { "url": path, "bg": color, "color": "#fff", "text": text, "transform": "capitalize", "weight": "600" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"></path></svg> ` })} </div> </article>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/components/home/MethodologyCard.astro", void 0);

const initial = new Proxy({"src":"/_astro/initial.BNxGcaJc.png","width":1248,"height":832,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/levels/initial.png";
							}
							
							return target[name];
						}
					});

const primary = new Proxy({"src":"/_astro/primary-1.D9wjp32J.png","width":1248,"height":832,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/levels/primary-1.png";
							}
							
							return target[name];
						}
					});

const $$Methodology = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "background": "white" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<header class="w-full p-4 pt-8 pb-8"> <p class="text-center mb-2 text-lg md:text-xl lg:text-2xl">
Una educación integral para formar líderes
</p> <h2 class="font-bold text-89007 text-center text-2xl md:text-3xl lg:text-3xl">
capaces de hacer un mundo mejor para todos.
</h2> </header> <div class="w-full grid gap-12 md:gap-8 md:grid-cols-2 lg:gap-8 lg:grid-cols-2"> ${renderComponent($$result3, "MethodologyCard", $$MethodologyCard, { "url": initial.src, "color": "#f7971c", "path": "/niveles/educacion-inicial", "text": "Inicial", "title": "Imagen de la educaci\xF3n infantil en la Instituci\xF3n Educativa N\xB0 89007" })} ${renderComponent($$result3, "MethodologyCard", $$MethodologyCard, { "url": primary.src, "color": "#82bb27", "path": "/niveles/educacion-primaria", "text": "Primaria", "title": "Imagen de la educaci\xF3n primaria en la Instituci\xF3n Educativa N\xB0 89007" })} </div> ` })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/Methodology.astro", void 0);

const image = new Proxy({"src":"/_astro/student.B4-gKjnP.png","width":600,"height":1029,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/assets/form/student.png";
							}
							
							return target[name];
						}
					});

const StartForm = () => {
  const formRef = useRef(null);
  const modalRef = useRef(null);
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
        className: "w-full bg-white p-0 pt-12 md:p-16 lg:p-16",
        ref: formRef,
        onSubmit: handleSubmit(onSubmit),
        children: [
          /* @__PURE__ */ jsxs("p", { className: "text-center leading-[1.6] mb-8 text-xl md:text-2xl lg:text-3xl", children: [
            "Queremos conversar contigo,",
            " ",
            /* @__PURE__ */ jsx("span", { className: "block text-89007 font-bold", children: "déjanos tus datos y te contactaremos" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-center text-base font-semibold mb-12 md:text-xl lg:text-xl", children: "Datos del padre de familia" }),
          /* @__PURE__ */ jsxs("div", { className: "w-full grid gap-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2", children: [
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
                  { value: "5 años", label: "5 años" },
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
          /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("button", { className: "p-3 pr-8 pl-8 rounded-3xl text-base text-white cursor-pointer shadow-2xs bg-89007 transition-all duration-300 hover:shadow-2xl", children: loading ? "Enviando datos..." : "Enviar datos" }) })
        ]
      }
    )
  ] });
};

const $$Astro = createAstro();
const $$FormSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormSection;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full box-border p-4 md:p-0 lg:p-0"${addAttribute(id, "id")}> <div class="w-full grid md:grid-cols-1 lg:grid-cols-[30rem_minmax(0,1fr)]"> <figure class="w-full bg-89007 flex flex-row justify-center items-end"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Alumna del colegio 89007", "format": "webp", "loading": "lazy", "class": "w-full max-w-[15rem] md:max-w-[15rem] lg:max-w-[28rem]" })} </figure> ${renderComponent($$result, "StartForm", StartForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/home/StartForm", "client:component-export": "default" })} </div> </section>`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/sections/home/FormSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Instituci\xF3n Educativa N.\xBA 89007" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "News", $$News, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Methodology", $$Methodology, {})} ${renderComponent($$result2, "Experiences", $$Experiences, {})} ${renderComponent($$result2, "FormSection", $$FormSection, { "id": "formulario" })} ` })}`;
}, "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/index.astro", void 0);

const $$file = "C:/Users/natan/Escritorio/project/institucioneducativa89007/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
