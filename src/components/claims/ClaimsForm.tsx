import Select from "@components/ui/form-components/Select";
import TextField from "@components/ui/form-components/TextField";
import Date from "@components/ui/form-components/Date";
import TextArea from "@components/ui/form-components/TextArea";

const ClaimsForm = () => {
  const claimTypes = [
    { value: "queja", text: "Queja" },
    { value: "reclamo", text: "Reclamo" },
  ];

  const reasons = [
    { value: "accidentes", text: "Accidentes" },
    { value: "trato_inadecuado", text: "Trato inadecuado del personal" },
    { value: "discriminacion", text: "Discriminación o maltrato" },
    { value: "demora_proceso", text: "Demora en la atención o trámites" },
    {
      value: "infraestructura",
      text: "Problemas con la infraestructura o servicios",
    },
    { value: "docente", text: "Desempeño inadecuado del docente" },
    { value: "materiales", text: "Falta de materiales educativos o recursos" },
    { value: "informacion_erronea", text: "Información inexacta o confusa" },
    {
      value: "evaluacion",
      text: "Inconformidad con evaluaciones o calificaciones",
    },
    {
      value: "bullying",
      text: "Falta de acción ante casos de bullying o violencia escolar",
    },
    {
      value: "alimentacion",
      text: "Problemas con el servicio de alimentación",
    },
    { value: "robo", text: "Robo" },
    { value: "matricula", text: "Matricula" },
    { value: "otros", text: "Otros" },
  ];

  const claimant = [
    { value: "estudiante", text: "Estudiante" },
    { value: "padre_madre", text: "Padre o madre de familia" },
    { value: "apoderado", text: "Apoderado" },
    { value: "visitante", text: "Usuario visitante" },
  ];

  const documentType = [
    { value: "dni", text: "DNI" },
    { value: "carnet", text: "Carnet de extranjería" },
    { value: "pasaporte", text: "Pasaporte" },
  ];

  const degrees = [
    { value: "3años", text: "3 años" },
    { value: "4años", text: "4 años" },
    { value: "5años", text: "5 años" },
    { value: "1primaria", text: "1° primaria" },
    { value: "2primaria", text: "2° primaria" },
    { value: "3primaria", text: "3° primaria" },
    { value: "4primaria", text: "4° primaria" },
    { value: "5primaria", text: "5° primaria" },
    { value: "6primaria", text: "6° primaria" },
  ];

  return (
    <form action="" className="flex flex-col text-base text-gray-800">
      <div className="w-full mb-12">
        <h2 className="text-89007 mb-4 text-xl md:text-2xl">Datos Generales</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label htmlFor="tipo-reclamo">Tipo de Reclamación</label>
            <Select
              name="tipo-reclamo"
              disabledText="-- Selecione un tipo --"
              options={claimTypes}
            />
          </div>
          <div>
            <label htmlFor="">Motivo de Reclamación</label>
            <Select
              name="motivo-reclamo"
              disabledText="-- Seleccione un motivo --"
              options={reasons}
            />
          </div>
          <div>
            <label htmlFor="reclamante">Reclamante</label>
            <Select
              name="reclamante"
              disabledText="-- Seleccione el tipo de reclamante --"
              options={claimant}
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-12">
        <h2 className="text-89007 mb-4 text-xl md:text-2xl">
          Datos del Reclamante
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label htmlFor="tipo-documento">Tipo de Documento</label>
            <Select
              name="tipo-documento"
              disabledText="-- Seleccione el tipo de documento --"
              options={documentType}
            />
          </div>
          <div>
            <label htmlFor="numero-documento">Número de Documento</label>
            <TextField type="number" placeholder="Escriba Nro. de documento" />
          </div>
          <div>
            <label htmlFor="apellidos">Apellidos</label>
            <TextField
              type="text"
              placeholder="Escriba apellidos del Reclamante"
            />
          </div>
          <div>
            <label htmlFor="nombres">Nombres</label>
            <TextField
              type="text"
              placeholder="Escriba nombres del Reclamante"
            />
          </div>
          <div>
            <label htmlFor="domicilio">Domicilio</label>
            <TextField
              type="text"
              placeholder="Escriba dirección del domicilio"
            />
          </div>
          <div>
            <label htmlFor="telefono-celular">Teléfono/Celular</label>
            <TextField
              type="number"
              placeholder="Escriba teléfono o celular del Reclamante"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <TextField type="text" placeholder="Escriba correo electrónico" />
          </div>
          <div>
            <label htmlFor="nombre-estudiante">Estudiante</label>
            <TextField
              type="text"
              placeholder="Escriba nombres del estudiante"
            />
          </div>
          <div>
            <label htmlFor="grado">Grado</label>
            <Select
              name="grado"
              disabledText="-- Seleccione un grado --"
              options={degrees}
            />
          </div>
          <div>
            <label htmlFor="seccion">Sección</label>
            <TextField type="text" placeholder="Escriba la sección" />
          </div>
        </div>
      </div>
      <div className="w-full mb-12">
        <h2 className="text-89007 mb-4 text-xl md:text-2xl">
          Detalle del Reclamo
        </h2>
        <div className="grid gap-4 grid-cols-1">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="fecha">Fecha Evento</label>
              <Date name="fecha" value="fecha" />
            </div>
            <div>
              <label htmlFor="monto">Monto Reclamado</label>
              <TextField type="number" placeholder="Escriba monto" />
            </div>
            <div>
              <label htmlFor="area-personal">Área/Personal involucrado</label>
              <TextField
                type="text"
                placeholder="Escriba área o personal involucrado"
              />
            </div>
          </div>
          <div>
            <label htmlFor="detalle">Detalle de lo ocurrido</label>
            <TextArea
              name="detalle"
              placeholder="Escriba breve resumen de lo ocurrido"
              rows={5}
            />
          </div>
          <div>
            <label htmlFor="pedido">Pedido</label>
            <TextArea
              name="pedido"
              placeholder="Escriba breve resumen del pedido solicitado"
              rows={5}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-start">
          <input type="checkbox" required />
          <span>
            {" "}
            Declaro ser el títular del servicio y acepto el contenido del
            presente formulario manifestando bajo Declaración Jurada la
            veracidad de los hechos descritos.
          </span>
        </div>
      </div>
      <div className="p-8">
        <ul className="list-disc">
          <li>
            La formulación del reclamo no impide acudir a otras vías de solución
            de controversias ni es requisito previo para interponer una denuncia
            ante el INDECOPI.
          </li>
          <li>
            El Proveedor debe dar respuesta al reclamo o queja en un plazo no
            mayor a quince (15) días hábiles, el cual es improrrogable.
          </li>
          <li>
            Al presentar su reclamo o queja, autoriza el tratamiento de sus
            datos personales conforme a nuestra{" "}
            <a
              href="/politicas-de-privacidad"
              className="text-89007 font-medium"
              target="_blank"
            >
              Política de Privacidad
            </a>
            .
          </li>
        </ul>
      </div>
      <button className="w-full p-4 bg-89007 rounded-lg text-white font-semibold cursor-pointer">
        Enviar Reclamo
      </button>
    </form>
  );
};

export default ClaimsForm;
