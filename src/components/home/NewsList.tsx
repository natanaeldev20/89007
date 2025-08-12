import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="w-full grid grid-cols-3">
        {news.map(({ id, imageUrl, title }) => (
          <div key={id}>
            <h1>{title}</h1>
            <img src={imageUrl} alt={title} />
          </div>
        ))}
      </div>
      <div>
        <h1>ASTROOOOO</h1>
      </div>
    </>
  );
};

export default NewsList;
