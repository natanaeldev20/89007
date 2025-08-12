import axios from "axios";

interface Authority {
  id: string;
  rol: string;
  name: string;
  lastName: string;
  message: string;
  imageUrl: string;
}

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getAuthority = async (): Promise<Authority[]> => {
  try {
    const { data } = await axios.get<{ authority: Authority[] }>(
      `${API_URL}/api/authority`
    );

    if (!Array.isArray(data.authority)) {
      throw new Error("Respuesta invalida del servidor");
    }

    return data.authority;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error al obtener las autoridades: ", error);
    }
    throw new Error("No se pudo obtener las autoridades");
  }
};
