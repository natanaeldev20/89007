import { getNews } from "@services/newsService";
import NewsCard from "@components/news/NewsCard";
import type { News } from "@services/newsService";
import { useState, useEffect } from "react";

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
    const getNewsAll = async () => {
      try {
        const news = await getNews();
        setNews(news);
      } catch (error) {
        console.error(error);
        throw new Error("Error al obtener las noticias");
      } finally {
        setLoading(false);
      }
    };

    getNewsAll();
  }, []);

  if (loading) return <p>Cargando noticias...</p>;

  return (
    <>
      {news.map(({ id, title, content, imageUrl, publishedAt }) => (
        <NewsCard
          key={id}
          title={title}
          description={content}
          url={imageUrl}
          publicationDate={publishedAt}
        />
      ))}
    </>
  );
};

export default NewsList;
