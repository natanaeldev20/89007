import axios from 'axios';

const API_URL = "https://cpanel89007.vercel.app";
const getNews3 = async () => {
  try {
    const { data } = await axios.get(
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
const getNews = async () => {
  try {
    const { data } = await axios.get(
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

export { getNews3 as a, getNews as g };
