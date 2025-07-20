import TextField from "../ui/form-components/TextField";
import Select from "@uiComponents/form-components/Select";
import TermsAndPrivacyAgreement from "@components/ui/form-components/TermsAndPrivacyAgreement";

const StartForm = () => {
  const documents = [
    { value: "dni", text: "DNI" },
    { value: "carnet", text: "CARNET EXTRANJERÍA" },
    { value: "pasaporte", text: "PASAPORTE" },
  ];

  const degrees = [
    { value: "3años", text: "3 AÑOS" },
    { value: "4años", text: "4 AÑOS" },
    { value: "5años", text: "5 AÑOS" },
    { value: "1primaria", text: "1° PRIMARIA" },
    { value: "2primaria", text: "2° PRIMARIA" },
    { value: "3primaria", text: "3° PRIMARIA" },
    { value: "4primaria", text: "4° PRIMARIA" },
    { value: "5primaria", text: "5° PRIMARIA" },
    { value: "6primaria", text: "6° PRIMARIA" },
  ];

  return (
    <form className="w-full bg-white p-0 pt-12 md:p-16 lg:p-16">
      <p className="text-center leading-[1.6] mb-8 text-xl md:text-2xl lg:text-3xl">
        Queremos conversar contigo,{" "}
        <span className="block text-89007 font-bold">
          déjanos tus datos y te contactaremos
        </span>
      </p>
      <h2 className="text-center text-base font-semibold mb-12 md:text-xl lg:text-xl">
        Datos del padre de familia
      </h2>
      <div className="w-full grid gap-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <TextField placeholder="NOMBRES" type="text" />
        <TextField placeholder="APELLIDOS" type="text" />
        <Select
          name="documents"
          disabledText="TIPO DE DOCUMENTO"
          options={documents}
        />
        <TextField placeholder="NÚMERO DE DOCUMENTO" type="number" />
        <TextField placeholder="CORREO ELECTRÓNICO" type="email" />
        <TextField placeholder="NÚMERO DE TELÉFONO CELULAR" type="number" />
        <Select name="grados" disabledText="GRADO" options={degrees} />
      </div>
      <TermsAndPrivacyAgreement />
      <div className="w-full">
        <button
          type="submit"
          className="p-3 pr-8 pl-8 rounded-3xl text-base text-white cursor-pointer shadow-2xs bg-89007 transition-all duration-300 hover:shadow-2xl"
        >
          Enviar mis datos
        </button>
      </div>
    </form>
  );
};

export default StartForm;
