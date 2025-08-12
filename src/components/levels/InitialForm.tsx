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

const InitialForm = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
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
        className="w-full bg-white p-8 rounded-lg shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="w-full mb-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
            ]}
          />
        </div>
        <TermsAndPrivacyAgreement />
        <button className="w-full bg-89007 text-white cursor-pointer p-4 text-lg font-bold rounded-lg shadow-xl">
          {loading ? "Enviando datos..." : "Enviar datos"}
        </button>
      </form>
    </>
  );
};

export default InitialForm;
