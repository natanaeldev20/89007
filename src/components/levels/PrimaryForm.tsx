import TextField from "@components/ui/form-components/TextField";
import Select from "@components/ui/form-components/Select";
import TermsAndPrivacyAgreement from "@components/ui/form-components/TermsAndPrivacyAgreement";

const PrimaryForm = () => {
  const documents = [
    { value: "dni", text: "DNI" },
    { value: "carnet", text: "CARNET EXTRANJERÍA" },
    { value: "pasaporte", text: "PASAPORTE" },
  ];

  const degrees = [
    { value: "1primaria", text: "1° PRIMARIA" },
    { value: "2primaria", text: "2° PRIMARIA" },
    { value: "3primaria", text: "3° PRIMARIA" },
    { value: "4primaria", text: "4° PRIMARIA" },
    { value: "5primaria", text: "5° PRIMARIA" },
    { value: "6primaria", text: "6° PRIMARIA" },
  ];

  return (
    <form className="w-full bg-white p-8 rounded-lg shadow-2xl">
      <div className="w-full grid mb-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <TextField type="text" placeholder="Nombres" />
        <TextField type="text" placeholder="Apellidos" />
        <Select
          name="documents"
          disabledText="TIPO DE DOCUMENTO"
          options={documents}
        />
        <TextField type="number" placeholder="Número de documento" />
        <TextField type="email" placeholder="Correo electrónico" />
        <TextField type="number" placeholder="Celular" />
        <Select name="grados" disabledText="GRADO" options={degrees} />
      </div>
      <TermsAndPrivacyAgreement />
      <button
        className="w-full bg-89007 text-white cursor-pointer p-4 text-lg font-bold rounded-lg shadow-xl"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default PrimaryForm;
