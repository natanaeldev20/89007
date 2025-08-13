import axios from "axios";

export interface News {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  imageUrl: string;
}

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getNews3 = async (): Promise<News[]> => {
  try {
    const { data } = await axios.get<{ news: News[] }>(
      `${API_URL}/api/school-news/latest3`
    );

    if (!Array.isArray(data.news)) {
      throw new Error("Respuesta invalida del servidor");
    }

    return data.news;
  } catch (error) {
    console.error("Error al obtener las noticias: ", error);
    throw new Error("No se pudo obtener las noticias");
  }
};

export const getNews = async (): Promise<News[]> => {
  try {
    const { data } = await axios.get<{ news: News[] }>(
      `${API_URL}/api/school-news/latest`
    );

    if (!Array.isArray(data.news)) {
      throw new Error("Respuesta invalida del servidor");
    }

    return data.news;
  } catch (error) {
    console.error("Error al obtener las noticias: ", error);
    throw new Error("No se pudo obtener las noticias");
  }
};
