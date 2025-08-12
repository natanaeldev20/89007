import { jsxs, jsx } from 'react/jsx-runtime';

const TextField = ({ type, placeholder, register, error }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]",
        type,
        ...register,
        placeholder
      }
    ),
    error?.message && /* @__PURE__ */ jsx("span", { className: "text-red-600 text-sm font-medium", children: error.message })
  ] });
};

const Select = ({
  label,
  options,
  disabled = false,
  className = "",
  register,
  error
}) => {
  return /* @__PURE__ */ jsxs(
    "select",
    {
      ...register,
      disabled,
      className: "w-full border-gray-300 border-2 outline-none rounded-md focus:border-transparent p-3 focus:ring-3 focus:ring-[#039fcf]",
      children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "-- Selecciona una opción --" }),
        options.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value))
      ]
    }
  );
};

export { Select as S, TextField as T };
