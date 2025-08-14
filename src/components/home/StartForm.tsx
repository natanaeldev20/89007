import TextField from "../ui/form-components/TextField";
import Select from "@uiComponents/form-components/Select";
import TermsAndPrivacyAgreement from "@components/ui/form-components/TermsAndPrivacyAgreement";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldError, SubmitHandler } from "react-hook-form";
import { AxiosError } from "axios";
import { createPreRegistration } from "@services/preRegistrationService";
import { AiOutlineCheckCircle } from "react-icons/ai";

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
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PreRegistrationProps>();

  const onSubmit: SubmitHandler<PreRegistrationProps> = async (data) => {
    try {
      setLoading(true);
      const res = await createPreRegistration(data);

      if (res.status === 201 || res.status === 200) {
        modalRef.current?.showModal();
        formRef.current?.reset();
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ error: string }>;
      const msg = axiosError.response?.data?.error;
    } finally {
      setLoading(false);
    }
  };

  const handleBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      modalRef.current?.close();
    }
  };

  return (
    <>
      <dialog
        ref={modalRef}
        className="m-auto rounded-xl p-6 w-80 max-w-full border-none shadow-lg backdrop:bg-[#0009]"
        onClick={handleBackdrop}
      >
        <div className="flex flex-col items-center gap-4">
          <AiOutlineCheckCircle className="text-89007" size={60} />
          <h1 className="text-lg font-bold text-center">¡Registro exitoso!</h1>
          <p className="text-center text-gray-600 text-sm">
            Tus datos han sido enviados correctamente. Nos pondremos en contacto
            contigo pronto.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded-md bg-89007 text-white"
            onClick={() => modalRef.current?.close()}
          >
            Cerrar
          </button>
        </div>
      </dialog>
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
            error={errors.lastName as FieldError}
          />
          <Select
            label="Tipo de documento:"
            noValue="TIPO DE DOCUMENTO"
            register={register("documentType", {
              required: {
                value: true,
                message: "El tipo de documento es requerido",
              },
            })}
            error={errors.documentType as FieldError}
            options={[
              { value: "dni", label: "DNI" },
              { value: "carne", label: "CARNE DE EXTRANJERIA" },
              { value: "pasaporte", label: "PASAPORTE" },
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
            error={errors.documentNumber as FieldError}
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
            error={errors.email as FieldError}
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
            error={errors.phone as FieldError}
          />
          <Select
            label="Grado:"
            noValue="GRADO"
            register={register("degree", {
              required: {
                value: true,
                message: "El grado es requerido",
              },
            })}
            error={errors.degree as FieldError}
            options={[
              { value: "3 años", label: "3 AÑOS" },
              { value: "4 años", label: "4 AÑOS" },
              { value: "5 años", label: "5 AÑOS" },
              { value: "1 primaria", label: "1° PRIMARIA" },
              { value: "2 primaria", label: "2° PRIMARIA" },
              { value: "3 primaria", label: "3° PRIMARIA" },
              { value: "4 primaria", label: "4° PRIMARIA" },
              { value: "5 primaria", label: "5° PRIMARIA" },
              { value: "6 primaria", label: "6° PRIMARIA" },
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
    </>
  );
};

export default StartForm;
