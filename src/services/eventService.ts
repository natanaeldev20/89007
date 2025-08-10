import axios from "axios";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  createdAt: Date;
}

export const getEvents = async (): Promise<Event[]> => {
  try {
    const { data } = await axios.get<{ events: Event[] }>(
      `http://localhost:3000/api/school-events/latest`
    );

    if (!Array.isArray(data.events)) {
      throw new Error("Respuesta invalida del servidor");
    }

    return data.events;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error al obtener los eventos: ", error);
    }
    throw new Error("No se pudo obtener los eventos");
  }
};
