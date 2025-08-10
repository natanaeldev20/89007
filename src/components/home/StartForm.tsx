import TextField from "../ui/form-components/TextField";
import Select from "@uiComponents/form-components/Select";
import TermsAndPrivacyAgreement from "@components/ui/form-components/TermsAndPrivacyAgreement";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldError, SubmitHandler } from "react-hook-form";
import { AxiosError } from "axios";
import { createPreRegistration } from "@services/preRegistrationService";

interface PreRegistrationProps {
  name: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
  degree: string;
}

const StartForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PreRegistrationProps>();

  const onSubmit: SubmitHandler<PreRegistrationProps> = async (data) => {
    console.log("Datos capturados del formulario:", data);
    try {
      setLoading(true);
      const res = await createPreRegistration(data);

      if (res.status === 201 || res.status === 200) {
        formRef.current?.reset();
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ error: string }>;
      const msg = axiosError.response?.data?.error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full bg-white p-0 pt-12 md:p-16 lg:p-16"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
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
        <TextField
          placeholder="NOMBRES"
          type="text"
          register={register("name", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
          })}
          error={errors.name as FieldError}
        />
        <TextField
          placeholder="APELLIDOS"
          type="text"
          register={register("lastName", {
            required: {
              value: true,
              message: "El apellido es requerido",
            },
          })}
        />
        <Select
          label="Tipo de documento:"
          register={register("documentType", {
            required: {
              value: true,
              message: "El tipo de documento es requerido",
            },
          })}
          error={errors.documentType as FieldError}
          options={[
            { value: "dni", label: "DNI" },
            { value: "carne", label: "Carne de extranjeria" },
            { value: "pasaporte", label: "Pasaporte" },
          ]}
        />
        <TextField
          placeholder="NÚMERO DE DOCUMENTO"
          type="number"
          register={register("documentNumber", {
            required: {
              value: true,
              message: "El numero de documento es requerido",
            },
          })}
        />
        <TextField
          placeholder="CORREO ELECTRÓNICO"
          type="email"
          register={register("email", {
            required: {
              value: true,
              message: "El correo electronico es requerido",
            },
          })}
        />
        <TextField
          placeholder="NÚMERO DE TELÉFONO CELULAR"
          type="number"
          register={register("phone", {
            required: {
              value: true,
              message: "El numero es requerido",
            },
          })}
        />
        <Select
          label="Grado:"
          register={register("degree", {
            required: {
              value: true,
              message: "El grado es requerido",
            },
          })}
          error={errors.degree as FieldError}
          options={[
            { value: "3 años", label: "3 años" },
            { value: "4 años", label: "4 años" },
            { value: "5 años", label: "5 años" },
            { value: "1 primaria", label: "1° primaria" },
            { value: "2 primaria", label: "2° primaria" },
            { value: "3 primaria", label: "3° primaria" },
            { value: "4 primaria", label: "4° primaria" },
            { value: "5 primaria", label: "5° primaria" },
            { value: "6 primaria", label: "6° primaria" },
          ]}
        />
      </div>
      <TermsAndPrivacyAgreement />
      <div className="w-full">
        <button className="p-3 pr-8 pl-8 rounded-3xl text-base text-white cursor-pointer shadow-2xs bg-89007 transition-all duration-300 hover:shadow-2xl">
          {loading ? "Enviando datos..." : "Enviar datos"}
        </button>
      </div>
    </form>
  );
};

export default StartForm;
