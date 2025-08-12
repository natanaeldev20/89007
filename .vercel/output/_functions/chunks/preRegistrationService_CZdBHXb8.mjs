import { jsxs, jsx } from 'react/jsx-runtime';
import axios from 'axios';

const TermsAndPrivacyAgreement = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center gap-2 mb-12", children: [
    /* @__PURE__ */ jsx("input", { type: "checkbox", name: "terminos-condiciones", required: true }),
    /* @__PURE__ */ jsxs("label", { children: [
      "He leído y acepto los",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/terminos-y-condiciones-de-uso",
          target: "_blank",
          className: "underline text-89007 transition-all duration-200 hover:text-yellow-400",
          children: "términos y condiciones"
        }
      ),
      " ",
      "y las",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/politicas-de-privacidad",
          className: "underline text-89007 transition-all duration-200 hover:text-yellow-400",
          target: "_blank",
          children: "políticas de privacidad."
        }
      )
    ] })
  ] });
};

const API_URL = "https://cpanel89007.vercel.app";
const createPreRegistration = async (data) => {
  const res = await axios.post(`${API_URL}/api/pre-registration`, data, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res;
};

export { TermsAndPrivacyAgreement as T, createPreRegistration as c };
