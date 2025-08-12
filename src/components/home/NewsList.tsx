import { useEffect, useState } from "react";
import NewsCard from "@components/home/NewsCard";

interface News {
  id: string;
  imageUrl: string;
  title: string;
}

export default function NewsList() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("https://cpanel89007.vercel.app/api/school-news/latest3")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <>
      {news.map((item) => (
        <NewsCard key={item.id} url={item.imageUrl} title={item.title} />
      ))}
    </>
  );
}
