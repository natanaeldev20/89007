import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "@components/home/NewsCard";

interface News {
  id: string;
  imageUrl: string;
  title: string;
}

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    // fetch("https://cpanel89007.vercel.app/api/school-news/latest3")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("API response:", data);
    //     setNews(data.news);
    //   });
    const getNews = async () => {
      const { data } = await axios.get(
        "https://cpanel89007.vercel.app/api/school-news/latest3"
      );
      setNews(data.news);
    };

    getNews();
  }, []);

  return (
    <>
      <div className="w-full mb-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map(({ id, imageUrl, title }) => (
          <NewsCard key={id} title={title} url={imageUrl} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
