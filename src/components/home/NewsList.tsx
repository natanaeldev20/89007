import NewsCard from "@components/home/NewsCard";
import { getNews3 } from "@services/newsService";

const data = await getNews3();

export default function NewsList() {
  return (
    <>
      {data.map((news) => (
        <NewsCard key={news.id} url={news.imageUrl} title={news.title} />
      ))}
    </>
  );
}
