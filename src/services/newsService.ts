import axios from "axios";

interface News {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  imageUrl: string;
}

export const getNews3 = async (): Promise<News[]> => {
  try {
    const { data } = await axios.get<{ news: News[] }>(
      "http://localhost:3000/api/school-news/latest3"
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
      "http://localhost:3000/api/school-news/latest"
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
